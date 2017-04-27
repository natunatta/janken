const GU = 0;
const CHOKI = 1;
const PA =2;

let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const amari = matches %2; 
  const isEven = amari ==0; //Trueは試合数が偶数
  //console.log(amari); //(amari)偶数か奇数かわかる
  console.log(`${matches} % 2 = ${amari} : ${isEven}`);
  if(isEven){//Trueの時(偶数の時)はGUを返す
    return GU;
  }
  return PA;
}

