import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';

function returnfile() {
  if(window.location.pathname.split('/')[2] === 'regression'){
    return regression; 
  } else if(window.location.pathname.split('/')[2] === 'classification') {
    return classification; 
  }
}

export default returnfile();