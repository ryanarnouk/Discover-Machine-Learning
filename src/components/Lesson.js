import React, { Component } from 'react';
import Blockly from 'node-blockly/browser'
import '../customblocks.js'
import Sidebar from './Sidebar';
import JSONloader from './JSONloader'
import ValidateJSON from '../seed/Schema/ChallengeScema';

const toolbox = `
  <xml>
      <block type="controls_if"></block>
      <block type="controls_whileUntil"></block>
      <block type="importfunction"></block>
      <block type="printfunction"></block>
      <block type="applyfunction"></block>
    </xml
  `

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNumber: this.props.match.params.id - 1,
    }
    this.blockly = this.blockly.bind(this);
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
    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      this.blockly();
    } /*
    if(classification.challenges[this.state.lessonNumber].codeblocks === true) {
      this.blockly();
    } */
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  render() { 
    //console.log(`${this.props.match.params.section} section. Challenge number ${this.props.match.params.id}`);
      
    console.log(JSONloader.challenges[this.state.lessonNumber].codeblocks)

    return (  
      <div style={{display: 'flex'}}>
        <Sidebar route={this.props.match}/>
        {/*need to figure out how to dynamically import json file based on url */}
        {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
          <div id="editor" className="editor" ref={ref => {this.editor = ref}}>
            <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}}></div>
          </div>
        ) : (
          <div style={{marginLeft: '30%'}}>
            <p>this challenge does not require codeblocks 
              We can put text here or anything relevant to the information on the sidebar
            </p>
          </div>
        )
        }
      </div>
    );
  }
}
 
export default Lesson;