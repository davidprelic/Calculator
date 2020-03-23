
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

let nums = [];
let opers = [];
let num = "";

const btns = document.querySelectorAll("button");

btns.forEach((currBtn) => {
   currBtn.addEventListener('click', () => {
      if(screen.textContent === "") {
         if(['1','2','3','4','5','6','7','8','9','0'].includes(currBtn.textContent)) {
            num = currBtn.textContent;
            screen.textContent = currBtn.textContent;
         }
      }
      else if(screen.textContent !== "" && ['+','-','*','/'].includes(currBtn.textContent)) {
         if(num !== "") {
            nums.push(Number(num));
            num = "";
         }
         if(opers.length < nums.length) {
            opers.push(currBtn.textContent);
            screen.textContent += currBtn.textContent;
         }
      }
      else if(screen.textContent !== "" && ['1','2','3','4','5','6','7','8','9','0'].includes(currBtn.textContent)) { 
         num += currBtn.textContent;
         screen.textContent += currBtn.textContent;    
      }
      
     
      else if(currBtn.textContent === "=") {
         nums.push(Number(num));
      
         let i;
         let res = Number(operate(opers[0], nums[0], nums[1]));
         for(i = 1; i < opers.length; i++) {
            res = Number(operate(opers[i], res, nums[i+1]));
         }
         
         screen.textContent = '' + res;
         nums = [];
         opers = [];
         num = "";
         nums.push(res);
      }
      else if(currBtn.textContent === "clear") {
         nums = [];
         opers = [];
         screen.textContent = "";
      }
       
   });
});











