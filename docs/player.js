const GU = 0;
const CHOKI = 1;
const PA =2;

let matches = 0;

//チョキ大好き
function actionChokiLover(){
  return GU;
}

//表裏
function actionOmoteUra(){
  matches = matches + 1;
  const amari = matches % 2 == 0;
  if(amari){
    return GU;
  }
  return PA;
}


//帰ってきた表裏
function actionOmoteUra2(){
  matches = matches + 1;
  const amari = matches % 3 == 0;
  if(amari){
    return CHOKI;
  }
  return result;
}

/*
チョキ大好きマン:　fighter::choki-lover
表か裏かマン: fighter::odd-even
帰ってきた表か裏かマン: fighter::on-third
*/

function action(oppornent){
  console.log(oppornent);
  let result = GU;
  matches = matches + 1;
  if(oppornent == "fighter::choki-lover"){
    result = actionChokiLover();
  } else if(oppornent == "fighter::odd-even"){
    result = actionOmoteUra();
  } else if(oppornent == "fighter::on-third"){
    result = actionOmoteUra2();
  }
  return result;
}