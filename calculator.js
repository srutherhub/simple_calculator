let sum = '';
let paren = true;
let paren2 = true;

function summer(number){
  if(number == "("){
    number = "("
  }else if(number == ")"){
    number == ")"
  }
  sum += number;
  console.log(sum)
}

function updateDisplay(number) {
  display.textContent += number;
}

function clearDisplay(){
  sum = ""
  display.textContent = '';
  display.innerHTML = "&nbsp;"
}

function calculate(){
  if(sum.includes("^")){
    let left = sum.split('').splice(0,sum.indexOf("^")).join('');
    let right = sum.split('').slice(sum.indexOf("^")+1).join('');
    console.log(left,right)
    display.textContent = Math.round(eval(Math.pow(left,eval(right)))*100)/100; 
  } else{
    display.textContent = Math.round(eval(sum)*100)/100;
  }
  
}

function parenSwitch(){
  if(paren == true){
    paren = false
    return '(';
  }else{
    paren = true
    return ')'
  }
}

function parenSwitch2(){
  if(paren2 == true){
    paren2 = false
    return '(';
  }else{
    paren2 = true
    return ')'
  }
}



