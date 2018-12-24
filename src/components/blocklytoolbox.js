import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';
import introcoding from '../seed/challenges/introcoding/lesson.json';
import deeplearning from '../seed/challenges/deeplearning/lesson.json';
import reinfocementlearning from '../seed/challenges/reinforcementlearning/lesson.json';

var toolbox;
if(window.location.pathname.split('/')[2] === 'regression'){
  toolbox = `<xml>
  <block type="importfunction"></block>
  <block type="printfunction"></block>
  <block type="applyfunction"></block>
  <block type="functionblock"></block>
  <block type="callfunctionblock"></block>
  <block type="setdata"></block>
  <block type="testingdata"></block>
  <block type="accuracyfunction"></block>
  </xml`
} else if(window.location.pathname.split('/')[2] === 'classification') {
  toolbox = `<xml>
  <block type="importfunction"></block>
  <block type="printfunction"></block>
  <block type="applyfunction"></block>
  <block type="functionblock"></block>
  <block type="callfunctionblock"></block>
  <block type="setdata"></block>
  <block type="testingdata"></block>
  <block type="accuracyfunction"></block>
  </xml`
} else if(window.location.pathname.split('/')[2] === 'introcoding') {
  toolbox = `
<xml>
  <block type="controls_if"></block>
  <block type="controls_whileUntil"></block>
  <block type="ifgreaterthanblock"></block>
  <block type="functionblock"></block>
  <block type="variablefunction"></block>
  <block type="printfunction"></block>
  <block type="argumentblock"></block>
  <block type="callfunctionblock"></block>
</xml
`
} else if(window.location.pathname.split('/')[2] === 'deeplearning') {
  toolbox = `<xml>
  <block type="printfunction"></block>
  </xml`
} else if(window.location.pathname.split('/')[2] === 'reinforcementlearning') {
  toolbox = `<xml>
  <block type="printfunction"></block>
  </xml`
}

export default toolbox;
