import React, { Component } from 'react';
import Modal from 'react-modal';
import JSONloader from './JSONloader';
import Parser from 'html-react-parser';
import GlossaryBlock from './GlossaryBlock';
import Media from "react-media";
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close'
import Console from './Console';
import Ajv from 'ajv';
import JSONschema from '../seed/Schema/JSONschema.json'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

// firebase
import { withFirebase, FirebaseContext } from './Firebase';

//validate json
// first thing we want to do is validate the JSON that is going to come through here
const ajv = Ajv({allErrors: true});
const valid = ajv.validate(JSONschema, JSONloader);
if(valid) {
  console.log('JSON file looks good');
} else {
  console.log('JSON file has problems')
  console.log(ajv.errors.map((a) => a.message));
  console.log(ajv.errors);
}


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '40%',
    width: '40vw',
    textAlign: 'center',
    fontFamily: 'Rubik'
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      lessonNumber: this.props.route.params.id - 1,
      consoletext: "Your code will output here...",
      challengestate: false,
      congratulations: false,
      gamecode: '674891'
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount () {
    // contine with ctrl + enter
    window.addEventListener('keydown', (e) => {
      window.addEventListener('keydown', (a) => {
        if(e.keyCode === 17 && a.keyCode === 13) {
          this.openModal();
        }
      });
    })
  }
 
  openModal() {
    this.setState({challengestate:this.check()});
    this.setState({modalOpen: true});
    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      this.save();
    }

    // save users progress to localstorage
    if(this.check() === true) {
      // right here it is getting the section not the url
      localStorage.setItem(`challengecomplete ${this.props.route.params.section} ${this.state.lessonNumber}`, true)
      // need to save the values to server if the user is signed in
    }
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  name = () => {
    return JSONloader.challenges[this.state.lessonNumber].name;
  }

  description = () => {    
    var str = JSONloader.challenges[this.state.lessonNumber].description;
    return Parser(str);
  }

  save = () => {
    var xml = this.props.blockly.Xml.workspaceToDom(this.props.blockly.mainWorkspace);
    localStorage.setItem(`workspace ${this.props.route.params.section} ${this.state.lessonNumber}`, this.props.blockly.Xml.domToText(xml));
    console.log(localStorage.getItem(`workspace ${this.props.route.params.section} ${JSONloader.challenges[this.state.lessonNumber]}`));
    console.log(`workspace ${this.props.route.params.section} ${this.state.lessonNumber}`);
  }

  glossary = () => {
    // if the current challenge has definitions in json return it, if not don't do anything
    if(JSONloader.challenges[this.state.lessonNumber].hasOwnProperty('definitions')) {
      return JSONloader.challenges[this.state.lessonNumber].definitions.map((a, i) => (
        <GlossaryBlock term={a.split(',')[0]} id={a.split(',')[1]} key={i}/> 
      )) 
    }
  }

  run = () => {
    var code = this.props.blockly.JavaScript.workspaceToCode(this.props.blockly.getMainWorkspace());
    this.setState({consoletext: code[code.length - 1]});
    if(code[0] === "") {
      this.setState({consoletext: "Nothing To Return"})
    }

    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      this.save();
    }

    // save users progress to localstorage
    if(this.check() === true) {
      // right here it is getting the section not the url
      localStorage.setItem(`challengecomplete ${this.props.route.params.section} ${this.state.lessonNumber}`, true)
      // need to save the values to server if the user is signed in
    }
  }

  check = (event) => {
    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      var code = this.props.blockly.JavaScript.workspaceToCode(this.props.blockly.getMainWorkspace());
      code = code.split(',') //split if it has spaces(for array)
      // trim all the values to insure no spaces in each value
      for (var i = 0; i < code.length; i++) {
        code[i] = code[i].trim()
      }

      console.log(code);  
    } else {
      return true;
    }
    
    this.setState({consoletext: code[code.length - 1]});
    if(code[0] === "") {
      this.setState({consoletext: "Nothing To Return"})
    }
    // make tests work with multiple blockly components
    // there is a problem with this code that returns the test as true when it should be false
    var self = this;
    var arrayofbool = [];
    function assert(a, b) {
      // use toUpperCase so it is case insensitive
      if(typeof a === 'string' && typeof b === 'string') {
        if(a.toUpperCase().trim() === b.toUpperCase().trim()) {
          arrayofbool.push(true);
        } else {
          if(self.state.challengestate === true) {
            arrayofbool.push(false);
          }
          arrayofbool.push(false);
        }  
      } else {
        if(a == b) {
          arrayofbool.push(true);
        } else {
          if(self.state.challengestate === true) {
            arrayofbool.push(false);
          }
          arrayofbool.push(false);
        } 
      }
    }

    function lengthfunc(a, b) {
      if(a || b) {
        if(a.length === 0) {
          arrayofbool.push(false);
        } else {
          arrayofbool.push(true);
        }
      }
    }

    function doesnotequal(a, b) {
      if(a.topUpperCase().trim() !== b.toUpperCase().trim()) {
        arrayofbool.push(true);
      } else {
        arrayofbool.push(false);
      }
    }

    function or(a, b, c) {
      if(a.toUpperCase().trim() === b.toUpperCase().trim() || a.toUpperCase().trim() === c.toUpperCase().trim()) {
        arrayofbool.push(true);
      } else {
        arrayofbool.push(false);
      }
    }

    eval(JSONloader.challenges[this.state.lessonNumber].tests[0].test);
    console.log(arrayofbool)

    function checktrue(value) {
      return value === true;
    }

    return arrayofbool.every(checktrue);
  }

  continue = () => {
    // add money to user localstorage object
    if(localStorage.getItem('money') === null) {
      localStorage.setItem('money', 5);
      // push to server
      this.props.firebase.updateMoney('test1', localStorage.getItem('money'), this.state.gamecode);
    } else {
      localStorage.setItem('money', parseInt(localStorage.getItem('money'), 10) + 5);
      // push to server 
      this.props.firebase.updateMoney('test1', localStorage.getItem('money'), this.state.gamecode);
    }

    // if it is the last lesson it needs to redirect to new page that congratulates them and then lets them go to next chapter.
    var x = []
    for (var a in JSONloader.challenges) {
      x.push(JSONloader.challenges[a].number)
    }
    if(this.state.lessonNumber + 1 === x[x.length-1]) {
      this.setState({congratulations: true});
    } else {
      window.location = `/challenges/${window.location.pathname.split('/')[2]}/${this.state.lessonNumber + 2}`
    }
  }

  hint = () => {
    window.open(`/hint/${this.props.route.params.section}/${this.props.route.params.id}`)
  }

  definitions = () => {
    if(JSONloader.challenges[this.state.lessonNumber].hasOwnProperty('definitions')) {
      return (
        <div>
          <h3 style={{fontFamily: 'Rubik'}}>Definitions:</h3>
          <div style={{marginBottom: '7%'}}>{this.glossary()}</div>
        </div>
      );
    }
  }

  render() {
    console.log(`${this.props.route.params.section} section. Challenge number ${this.props.route.params.id}`);

    console.log(this.state.challengestate);

    const a = this.props.route.params.section;
    return (
      <div>
        <Media query="(max-width: 600px)">
          {matches => 
            matches ? (
              <div className="sidebartop">
                <div className="challenge">
                  <h2 className="name">{this.name(a)}</h2>
                  <div className="text">
                    {this.description()}
                    <div style={{marginBottom: '7%'}}>{this.glossary()}</div>
                    {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                      <div>
                        <Console text={this.state.consoletext}/>
                        <button onClick={this.run} className="run">Run Code</button>
                      </div>
                      ) : false}
                  </div>
                  <div className="buttons">
                  <button className="check" onClick={this.openModal}>{JSONloader.challenges[this.state.lessonNumber].codeblocks ? 'Check' : 'Next'}</button>
                    <Modal 
                      isOpen={this.state.modalOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Check"
                    > 
                      {this.state.challengestate ? (
                        <div>
                        <Check style={{color: '#0E8EFF', width: 90, height: 90}}/>
                        <h1>Great Job</h1>
                        <button className="continuebutton" onClick={this.continue}>Continue</button>
                      </div>
                    ) : (
                      <div>
                        <Close style={{color: '#7F0001', width: 90, height: 90}}/>
                        <h1>Try Again</h1>
                        <button className="incorrectcontinuebutton" onClick={this.closeModal}>Continue</button>
                        <button className="hintbutton" onClick={this.hint}>Hint</button>
                      </div>
                      )}
                    </Modal>
                    <button className="hint" onClick={this.hint}>Hint</button>
                  </div>
                  {JSONloader.challenges[this.state.lessonNumber].codeblocks ? <FontAwesome name="refresh" size="2x" style={{color: 'white'}} onClick={() => this.props.blockly.mainWorkspace.clear()} className="refresh"/> : false }
                  {this.state.congratulations ? 
                  <Modal 
                      isOpen={this.state.modalOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={[customStyles, {height: '1000px'}]}
                      contentLabel="Check"
                    > 
                      <div style={{fontFamily: 'Rubik', textAlign: 'center'}}>
                        <h1>Congratulations</h1>
                        <p>You have successfully completed the chapter!</p>
                        <img src='/img/party.png' alt="party"/>
                        <p><Link to="/challenges">Continue onto the next lesson</Link></p>
                      </div>
                    </Modal>
                     : null}
                </div>
              </div>
            ) : (
              <div className="sidebar">
                <div className="challenge">
                  <h2 className="name">{this.name(a)}</h2>
                  <div className="text">
                    {/*<div dangerouslySetInnerHTML={{__html: JSONloader.description[this.state.lessonNumber].description}}></div>*/}
                    {this.description()}
                    {this.definitions()}
                    {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                      <div>
                        <Console text={this.state.consoletext}/>
                        <div style={{display: 'flex'}}>
                          <button onClick={this.run} className="run">Run Code</button>
                          <button className="refresh">{JSONloader.challenges[this.state.lessonNumber].codeblocks ? <FontAwesome name="refresh" size="2x" style={{color: 'white'}} onClick={() => this.props.blockly.mainWorkspace.clear()} /> : false }</button>
                        </div>
                      </div>
                      ) : false}
                  </div>
                  <div className="buttons">
                    <button className="check" onClick={this.openModal}>{JSONloader.challenges[this.state.lessonNumber].codeblocks ? 'Check' : 'Next'}</button>
                    <Modal 
                      isOpen={this.state.modalOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Check"
                    > 
                      {this.state.challengestate ? (
                        <div>
                          <Check style={{color: '#0E8EFF', width: 90, height: 90}}/>
                          <h1>Great Job</h1>
                          <button className="continuebutton" onClick={this.continue}>Continue</button>
                        </div>
                      ) : (
                        <div>
                          <Close style={{color: '#7F0001', width: 90, height: 90}}/>
                          <h1>Try Again</h1>
                          <button className="incorrectcontinuebutton" onClick={this.closeModal}>Continue</button>
                          <button className="hintbutton" onClick={this.hint}>Hint</button>
                        </div>
                      )}
                    </Modal>
                    {JSONloader.challenges[this.state.lessonNumber].codeblocks ? <button className="hint" onClick={this.hint}>Hint</button>: false}
                  </div>
                  {this.state.congratulations ? 
                  <Modal 
                      isOpen={this.state.modalOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={[customStyles, {height: '1000px'}]}
                      contentLabel="Check"
                    > 
                      <div style={{fontFamily: 'Rubik', textAlign: 'center'}}>
                        <h1>Congratulations</h1>
                        <p>You have successfully completed the chapter!</p>
                        <img src='/img/party.png' alt="party"/>
                        <p><Link to="/challenges">Continue onto the next lesson</Link></p>
                      </div>
                    </Modal>
                     : null}
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default withFirebase(Sidebar);