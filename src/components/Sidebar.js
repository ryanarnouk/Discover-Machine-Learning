import React, { Component } from 'react';
import Modal from 'react-modal';
import Map from './Map';
import JSONloader from './JSONloader';
import Parser from 'html-react-parser';
import GlossaryBlock from './GlossaryBlock';
import Media from "react-media";
import CheckCircle from '@material-ui/icons/CheckCircle';
import FontAwesome from 'react-fontawesome';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '50%',
    width: '40vw',
    textAlign: 'center'
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      lessonNumber: this.props.route.params.id - 1,
      done: false // change this value later to reflect if challenge is passed or not
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalOpen: true});
    // need to figure out how to save user code that uses blockly
    /*
    console.log(this.props.blockly);
    localStorage.setItem('hi', 'hi this is a test');
    console.log(localStorage.getItem('hi'))
    console.log(this.props.blockly.Xml.workspaceToDom(this.props.blockly));
    */
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

  render() {
    console.log(`${this.props.route.params.section} section. Challenge number ${this.props.route.params.id}`);

    const a = this.props.route.params.section;

    console.log(this.description());
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
                    {JSONloader.challenges[this.state.lessonNumber].definitions.map(a => (
                      <GlossaryBlock term={a.split(',')[0]} id={a.split(',')[1]}/>
                    ))}
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
                      {this.state.done ? (
                        <div>
                          <FontAwesome name="check-circle" style={{color: '#0E8EFF'}} size={70}/>
                          <h1>Great Job</h1>
                          <button className="continuebutton ">Continue</button>
                        </div>
                      ) : (
                        <div>
                          <FontAwesome name="times-circle" style={{color: '#7F0001'}} size={70}/>
                          <h1>Try Again</h1>
                          <button className="incorrectcontinuebutton">Continue</button>
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
                    <h3>Definitions:</h3>
                    {JSONloader.challenges[this.state.lessonNumber].definitions.map(a => (
                      <GlossaryBlock term={a.split(',')[0]} id={a.split(',')[1]}/>
                    ))}
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
                      {this.state.done ? (
                        <div>
                          <FontAwesome name="check-circle" style={{color: '#0E8EFF'}} size={70}/>
                          <h1>Great Job</h1>
                          <button className="continuebutton ">Continue</button>
                        </div>
                      ) : (
                        <div>
                          <FontAwesome name="times-circle" style={{color: '#7F0001'}} size={70}/>
                          <h1>Try Again</h1>
                          <button className="incorrectcontinuebutton">Continue</button>
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