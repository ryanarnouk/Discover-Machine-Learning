import React, { Component } from 'react';
import Blockly from 'node-blockly/browser'
import '../customblocks.js'
import Sidebar from './Sidebar';
import JSONloader from './JSONloader'
import Media from 'react-media';
import ProfileNavbar from './ProfileNavbar'
import NotHotdog from './NotHotdog';
import toolbox from './blocklytoolbox'
import Parser from 'html-react-parser'
import GoogleAds from './GoogleAds';

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNumber: this.props.match.params.id - 1,
      challengestate: false
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

    //console.log(Blockly.mainWorkspace.getAllBlocks());
    //console.log(Blockly.mainWorkspace.get   AllBlocks()[0].type);
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  load = () => {
    var xml = Blockly.Xml.textToDom(localStorage.getItem(`workspace ${this.props.match.params.section} ${this.state.lessonNumber}`));
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 

    if(JSONloader.challenges[this.state.lessonNumber].previouscode === true) {
      console.log(this.state.lessonNumber)
      if(localStorage.getItem(`workspace ${this.props.match.params.section} ${this.state.lessonNumber}`) === null) {
        xml = Blockly.Xml.textToDom(localStorage.getItem(`workspace ${this.props.match.params.section} ${this.state.lessonNumber - 1}`));
        Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
      }
    }
  }

  render() { 
    //console.log(`${this.props.match.params.section} section. Challenge number ${this.props.match.params.id}`);

    console.log(this.props.match.params.section);
    return (
      <div style={{fontFamily: 'roboto'}}>
        <Media query="(max-width: 600px)">
          {matches => 
            matches ? (
              <div>
                <ProfileNavbar />
                <Sidebar route={this.props.match} blockly={Blockly}/>
                {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                  <div id="editor" className="editortop" ref={ref => {this.editor = ref}} style={{width: '100%'}}>
                    <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
                  </div>
                ) : (
                  <div style={{marginLeft: '31%'}}>
                    <div>{Parser(JSONloader.challenges[this.state.lessonNumber].codeblockarea)}</div>
                    {/*<GoogleAds />*/}
                  </div>
                )
                }
              </div>
            ) : (
              <div style={{overflowY: 'hidden'}}>
                <ProfileNavbar/>
                <div style={{display: 'flex'}}>
                  <Sidebar route={this.props.match} blockly={Blockly}/>
                  {JSONloader.challenges[this.state.lessonNumber].codeblocks ? (
                    <div id="editor" className="editor" ref={ref => {this.editor = ref}} style={{width: '100%'}}>
                      <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
                      {/*<GoogleAds />*/}
                    </div>
                  ) : (
                    <div style={{marginLeft: '31%'}}>
                      <div>{Parser(JSONloader.challenges[this.state.lessonNumber].codeblockarea)}</div>
                      {/*<GoogleAds />*/}
                    </div>
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