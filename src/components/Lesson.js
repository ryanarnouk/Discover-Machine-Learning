import React, { Component } from 'react';
import Blockly from 'node-blockly/browser'
import '../customblocks.js'
import Sidebar from './Sidebar';
import JSONloader from './JSONloader'
import Media from 'react-media';
import ProfileNavbar from './ProfileNavbar'
import NotHotdog from './NotHotdog';
import toolbox from './blocklytoolbox'



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
    //console.log(Blockly.mainWorkspace.get   AllBlocks()[0].type);
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  load = () => {
    var xml = Blockly.Xml.textToDom(localStorage.getItem(`workspace ${JSONloader.challenges[this.state.lessonNumber].section} ${this.state.lessonNumber}`));
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
  }

  check(event) {
    // currently the idea for running tests is to write code generators for all the blocks then check the outputs rather than using a ton of functions that get all the blocks in the workspace

    // In the code generator we can run all the functions that are called and simply return all the values submitted. say there is a function return the values of it and then right here right tests to make sure that values are good taken from json for each challenge (assert code)


    // run the code for the blocks here
    var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    code = code.split(','); //split if it has spaces(for array)
    console.log(code);   
    
    // FUNCTIONS

    // figure out if I should put all those functions and stuff in the custom blocks file

    // make sure print function prints correct 
    function printfunction (a) {
      if(code === a) {
        return true;
      } else {
        return false; 
      }
    }

    function importfunction (b) {
      // get working on making the import function seperate from the print function 
      console.log(code);
      if(code[1] === 'import') {
        if(code[0] === b) {
          return true; 
        } else {
          return false; 
        }
      }
    }

    function setxydata (a, b) {
      return code;
    }

    //evalute functions from string (figure out a better alternative than eval)
    console.log(eval(JSONloader.challenges[this.state.lessonNumber].tests[0].test));
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