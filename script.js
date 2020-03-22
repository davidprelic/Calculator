
function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   return a / b;
}

function operate(operator, num1, num2) {
   switch(operator) {
      case '+':
         return add(num1, num2);
      case '-':
         return subtract(num1, num2);
      case '*':
         return multiply(num1, num2);
      case '/':
         return divide(num1, num2);
   }
}

const screen = document.querySelector("#cont");


let num1 = '';
let num2 = '';
let ope = '';

const btns = document.querySelectorAll("button");

btns.forEach((currBtn) => {
   currBtn.addEventListener('click', () => {
      if(screen.textContent === "") {
         if(['1','2','3','4','5','6','7','8','9','0'].includes(currBtn.textContent)) {
            num1 = currBtn.textContent;
            screen.textContent = currBtn.textContent;
         }
      }
      else if(screen.textContent !== "" && ['+','-','*','/'].includes(currBtn.textContent)) {
         ope = currBtn.textContent;
         screen.textContent += ope;
      }
      else if(screen.textContent !== "" && ope === "" && ['1','2','3','4','5','6','7','8','9','0'].includes(currBtn.textContent)) {
         num1 += currBtn.textContent;
         screen.textContent = num1;
      }
      
      else if(screen.textContent !== "" && ope !== "" && ['1','2','3','4','5','6','7','8','9','0'].includes(currBtn.textContent)) { 
         num2 += currBtn.textContent;
         screen.textContent += currBtn.textContent;    
      }
     
      else if(currBtn.textContent === "=") {
         let a = Number(num1);
         let b = Number(num2);
    
         screen.textContent = '' + operate(ope, a, b);
      }
       
   });
});











