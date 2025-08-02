 let display = document.getElementById("display");
            let afterCalculated = false;
            function appendNumber(number) {
             if(display.innerText === "0" || afterCalculated){
              display.innerText = number;
             }
             else{
              display.innerText += number;
             }
             afterCalculated = false;
            }
            function appendOperator(oper) {
              if (afterCalculated){
                afterCalculated = false;
              }
             display.innerText += oper;
            }
            function clearDisplay() {
              
              display.innerText = "0";
            }
            function backspace() {
              let current = display.innerText;
              if(current.length > 1){
                display.innerText = current.slice(0,-1);
              }
              else{
                display.innerText = "0";
              }
            }
            function calculate() {
              try{display.innerText = eval(display.innerText);
                afterCalculated = true;
              }
              catch(error){
                display.innerText = "Error";
                afterCalculated = false;
              }
              }