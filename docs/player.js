const GU = 0;
const CHOKI = 1;
const PA =2;

let matches = 0;

//チョキ大好き
function actionChokiLover(){
  return GU;
}

//表裏
function actionOmoteUra(){ //勝てない(泣)
  matches = matches + 1;
  const amari = matches % 2 == 0;
  if(amari){
    result = GU;
  } else {
    result = PA;
  }
   return result;
}


//帰ってきた表裏
function actionOmoteUra2(){
  matches = matches + 1;
  const amari = matches % 3 == 0;
  if(amari){
    result = CHOKI;
  } else {
    result = GU;
  }
  return result;
}

//順番に出していくマン
function actionRotation(){
  matches = matches + 1;
  const toReturnChoki = matches % 3 == 0;
  const toReturnPa = matches % 3 == 2; //なんで2？
  let result = GU;

  if (toReturnChoki){
    result = CHOKI;
  } else if(toReturnPa) {
    result = PA;
  } else {
    result = GU;
  }
  return result;
}

/*
チョキ大好きマン:　fighter::choki-lover
表か裏かマン: fighter::odd-even
帰ってきた表か裏かマン: fighter::on-third
順番に出していくマン: "fighter::rotation"
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
  } else if(oppornent == "fighter::rotation"){
    result = actionRotation();
  }
  return result;
}