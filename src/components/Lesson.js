import React, { Component } from 'react';
import Blockly from 'node-blockly/browser'
import '../customblocks.js'
import Sidebar from './Sidebar';
import JSONloader from './JSONloader'
import Media from 'react-media';
import ProfileNavbar from './ProfileNavbar'
import NotHotdog from './NotHotdog';

const toolbox = `
  <xml>
    <block type="controls_if"></block>
    <block type="controls_whileUntil"></block>
    <block type="importfunction"></block>
    <block type="printfunction"></block>
    <block type="applyfunction"></block>
    <block type="variablefunction"></block>
    <block type="ifgreaterthanblock"></block>
    <block type="functionblock"></block>
    <block type="argumentblock"></block>
    <block type="callfunctionblock"></block>
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
    Blockly.svgResize(workspacePlayground);
  }

  componentDidMount() { 
    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      this.blockly();
    }
    document.title = "Discover Machine Learning - " + JSONloader.challenges[this.state.lessonNumber].name;

    if(JSONloader.challenges[this.state.lessonNumber].codeblocks === true) {
      this.load();
    }

    console.log(Blockly.mainWorkspace.getAllBlocks());
    //console.log(Blockly.mainWorkspace.getAllBlocks()[0].type);
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  load = () => {
    var xml = Blockly.Xml.textToDom(localStorage.getItem(`workspace ${JSONloader.challenges[this.state.lessonNumber].section} ${this.state.lessonNumber}`));
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
  }

  check(event) {
    // check if the user got the required code to pass the challenge
    // later we would load the test from the json file and run the code
    // for now we will just try to get the blocks and figure out how we can run the code in javascript

    // this should be in lesson and not sidebar because it needs access to the blocks

    // functions that are going to be used in JSON
    function component(a) {
      // in each function we need to do whatever the specific test wants
      // for example, in this one we want to compare each too make sure that import function is there

      // Right here I want to iterate through the function and see if any of the types equal the type that we want 
      for(var i = 0; i <= Blockly.mainWorkspace.getAllBlocks().length; i++) {
        if(Blockly.mainWorkspace.getAllBlocks()[i].type === a.trim()) {
          return true;
        } else {
          return false;
        }
      }
    }

    function args(a, b) {
      // get all the arguments and individual parts of the components
      for(var x in Blockly.mainWorkspace.getAllBlocks()) {
        for(var y in Blockly.mainWorkspace.getAllBlocks()[x].inputList) {
          for(var v in Blockly.mainWorkspace.getAllBlocks()[x].inputList[y].fieldRow) {
            console.log(Blockly.mainWorkspace.getAllBlocks()[x].inputList[y].fieldRow[v].text_)
          }
        }
      }
    }

    function values(a) {
      // for this one if it called we want to see what is returned so we take once argument of what should be returned and then compare to what is returned to the console in the end
      console.log(a);

      // we also need to make sure that the user gets the final output well and not just by putting a print function. We could do this by adding different tests or more, or make sure that they are using the proper components with the component function
    }

    function nestedcomponents(a) {
      // we can make sure that there are proper components inside functions and if statements using the nestedcomponents function
      console.log(a);

      // more work needs to be done on this one and how it would relate to component.
    }

    //evalute functions from string (figure out a better alternative than eval)
    //eval(JSONloader.challenges[this.state.lessonNumber].tests[0].test)
    console.log(component('importfunction'));
    args();
  }

  render() { 
    //console.log(`${this.props.match.params.section} section. Challenge number ${this.props.match.params.id}`);
      
    console.log(JSONloader.challenges[this.state.lessonNumber].codeblocks)

    return (
      <div style={{fontFamily: 'roboto'}}>
        <Media query="(max-width: 600px)">
          {matches => 
            matches ? (
              <div>
                <ProfileNavbar />
                <Sidebar route={this.props.match} blockly={Blockly} checkClick={this.check.bind(this)}/>
                {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                  <div id="editor" className="editortop" ref={ref => {this.editor = ref}}>
                    <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
                  </div>
                ) : (
                  <div>
                    <p>this challenge does not require codeblocks 
                      We can put text here or anything relevant to the information on the sidebar
                    </p>
                  </div>
                )
                }
              </div>
            ) : (
              <div style={{overflowY: 'hidden'}}>
                <ProfileNavbar/>
                <div style={{display: 'flex'}}>
                  <Sidebar route={this.props.match} blockly={Blockly} checkClick={this.check.bind(this)}/>
                  {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                    <div id="editor" className="editor" ref={ref => {this.editor = ref}}>
                      <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
                    </div>
                  ) : (
                    <NotHotdog />
                  )
                  }
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}
 
export default Lesson;