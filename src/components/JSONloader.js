import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';
import introcoding from '../seed/challenges/introcoding/lesson.json';
import deeplearning from '../seed/challenges/deeplearning/lesson.json';
import reinfocementlearning from '../seed/challenges/reinforcementlearning/lesson.json';

function returnfile() {
  if(window.location.pathname.split('/')[2] === 'regression'){
    return regression; 
  } else if(window.location.pathname.split('/')[2] === 'classification') {
    return classification; 
  } else if(window.location.pathname.split('/')[2] === 'introcoding') {
    return introcoding;
  } else if(window.location.pathname.split('/')[2] === 'deeplearning') {
    return deeplearning;
  } else if(window.location.pathname.split('/')[2] === 'reinforcementlearning') {
    return reinfocementlearning;
  }
}

export default returnfile();