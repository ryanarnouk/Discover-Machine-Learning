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
  <block type="variablefunction"></block>
  <block type="functionblock"></block>
  <block type="callfunctionblock"></block>
  <block type="setdata"></block>
  </xml`
} else if(window.location.pathname.split('/')[2] === 'classification') {

} else if(window.location.pathname.split('/')[2] === 'introcoding') {
  toolbox = `
<xml>
  <block type="controls_if"></block>
  <block type="controls_whileUntil"></block>
  <block type="ifgreaterthanblock"></block>
  <block type="functionblock"></block>
  <block type="argumentblock"></block>
  <block type="callfunctionblock"></block>
</xml
`
} else if(window.location.pathname.split('/')[2] === 'deeplearning') {
  
} else if(window.location.pathname.split('/')[2] === 'reinforcementlearning') {

}

console.log(toolbox);

export default toolbox;