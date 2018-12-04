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
      challengestate: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({challengestate:this.check()});
    this.setState({modalOpen: true});
    this.save();
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
    localStorage.setItem(`workspace ${JSONloader.challenges[this.state.lessonNumber].section} ${this.state.lessonNumber}`, this.props.blockly.Xml.domToText(xml));
    console.log(localStorage.getItem(`workspace ${JSONloader.challenges[this.state.lessonNumber].section} ${JSONloader.challenges[this.state.lessonNumber]}`));
    console.log(`workspace ${JSONloader.challenges[this.state.lessonNumber].section} ${this.state.lessonNumber}`);
  }
  
  hint = () => {
    
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
    this.setState({consoletext: code});
    if(code === "") {
      this.setState({consoletext: "Nothing To Return"})
    }
  }

  check = (event) => {
    // currently the idea for running tests is to write code generators for all the blocks then check the outputs rather than using a ton of functions that get all the blocks in the workspace

    // In the code generator we can run all the functions that are called and simply return all the values submitted. say there is a function return the values of it and then right here right tests to make sure that values are good taken from json for each challenge (assert code)


    // run the code for the blocks here
    var code = this.props.blockly.JavaScript.workspaceToCode(this.props.blockly.getMainWorkspace());
    code = code.split(','); //split if it has spaces(for array)
    console.log(code);   

    // make tests work with multiple blockly components
    // there is a problem with this code that returns the test as true when it should be false
    var self = this;
    var arrayofbool = [];
    function assert(a, b) {
      if(a == b) {
        arrayofbool.push(true);
      } else {
        if(self.state.challengestate === true) {
          arrayofbool.push(false);
        }
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
    window.location = `/challenges/${window.location.pathname.split('/')[2]}/${this.state.lessonNumber + 2}`
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
                    {this.glossary()}
                    {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                      <div>
                        <Console text={this.state.consoletext}/>
                        <button onClick={this.run} className="run">Run Code</button>
                      </div>
                      ) : false}
                  </div>
                  <div className="buttons">
                    <button className="check" onClick={this.openModal}>Check</button>
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
                        <button className="hintbutton">Hint</button>
                      </div>
                      )}
                    </Modal>
                    <button className="hint" onClick={this.hint}>Hint</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sidebar">
                <div className="challenge">
                  <h2 className="name">{this.name(a)}</h2>
                  <div className="text">
                    {/*<div dangerouslySetInnerHTML={{__html: JSONloader.description[this.state.lessonNumber].description}}></div>*/}
                    {this.description()}
                    <h3 style={{fontFamily: 'Rubik'}}>Definitions:</h3>
                    {this.glossary()}
                    {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                      <div>
                        <Console text={this.state.consoletext}/>
                        <button onClick={this.run} className="run">Run Code</button>
                      </div>
                      ) : false}
                  </div>
                  <div className="buttons">
                    <button className="check" onClick={this.openModal}>Check</button>
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
                          <button className="hintbutton">Hint</button>
                        </div>
                      )}
                    </Modal>
                    <button className="hint" onClick={this.hint}>Hint</button>
                  </div>
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Sidebar;