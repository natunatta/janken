const GU = 0;
const CHOKI = 1;
const PA =2;

let matches = 0;

function actionAgainstOmoteUra2(oppornent){
  matches = matches + 1;
  const amari = matches % 3; 
  const unsual = amari == 0;
  if(unsual){
    return CHOKI;
  }
  return GU;
}

function action(oppornent){
  let result = actionAgainstOmoteUra2();
  return result;
}