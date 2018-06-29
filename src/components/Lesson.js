import React, { Component } from 'react';

import Map from './Map'
import Blockly from 'node-blockly/browser'
import '../customblocks.js'
import Modal from 'react-modal';
import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';
import ValidateJSON from '../seed/Schema/ChallengeScema';
ValidateJSON(regression[window.location.pathname.split('/'[3] - 1)]);

// need to figure out how to url params here and not in the object
console.log(window.location.pathname.split('/')[2])

const toolbox = `
  <xml>
      <block type="controls_if"></block>
      <block type="controls_whileUntil"></block>
      <block type="importfunction"></block>
      <block type="printfunction"></block>
      <block type="applyfunction"></block>
    </xml
  `

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      lessonNumber: this.props.match.params.id - 1,
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.blockly = this.blockly.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  onresize = (e) => {
    var element = this.editor;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    this.blocklyDiv.style.left = x + 'px';
    this.blocklyDiv.style.top = y + 'px';
    this.blocklyDiv.style.width = this.editor.offsetWidth + 'px';
    this.blocklyDiv.style.height = this.editor.offsetHeight + 'px';
  }

  blockly() {
    var workspacePlayground = Blockly.inject(this.blocklyDiv, {toolbox: toolbox})
    window.addEventListener('resize', this.onresize, false);
    this.onresize();
    Blockly.svgResize(workspacePlayground)
  }

  componentDidMount() {
    this.blockly();
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  name = (a) => {
    if(a === 'regression') {
      return regression.challenges[this.state.lessonNumber].name;
    } else if(a === 'classification') {
      return classification.challenges[this.state.lessonNumber].name;
    }
  }

  description = (a)  => {
    if(a === 'regression') {
      return regression.challenges[this.state.lessonNumber].description; 
    } else if(a === 'classification') {
      return classification.challenges[this.state.lessonNumber].description
    }
  }

  render() { 
    console.log(`${this.props.match.params.section} section. Challenge number ${this.props.match.params.id}`);
    var a = this.props.match.params.section;

    return (  
      <div>
        <div className="sidebar">
          <div>
            <Map/>
          </div>
          <div className="challenge">
            <h2 className="name">{this.name(a)}</h2>
            <p className="text">{this.description(a)}</p>
            <div className="buttons">
              <button className="check" onClick={this.openModal}>Check</button>
              <Modal 
                isOpen={this.state.modalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Check"
              />
              <button className="hint" onClick={this.hint}>Hint</button>
            </div>
          </div>
        </div>
        <div id="editor" className="editor" ref={ref => {this.editor = ref}}>
          <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}}></div>
        </div>
      </div>
    );
  }
}
 
export default Lesson;