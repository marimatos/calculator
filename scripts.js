var buttons = document.querySelectorAll('.btn.num');
var operators = document.querySelectorAll('.btn.operator');
var display = document.querySelector('.screen');

var clear = document.querySelector('.btn-clear');
clear.onclick = function() {
    display.innerHTML = '0';
}

function screenValue(val){
    if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      display.innerText += val; 
    }


for(btn of buttons){
    btn.onclick = function() {
        btnVal = this.innerHTML
        screenValue(btnVal);
    }
}

for(op of operators){
    op.onclick = function() {
        btnVal = this.innerHTML
        screenValue(btnVal);
    }
}


function calc(){
    try {
      var result = eval(display.innerText);
      display.innerText = result;
    } catch (e) {
        display.innerText = "Error";
    }
  }

  btnEqual = document.querySelector('.btn.equal');
  btnEqual.onclick = function() {
      calc();
  }