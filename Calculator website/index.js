let button=document.querySelectorAll("button");
let currentInput=document.getElementById("currentInput");
let displayOutput=document.getElementById("displayOutput");
let storage=[];
let container="";
let result;

function clear(){
  currentInput.innerText="";
  displayOutput.innerText="0";
  container="";
  storage=[];
}

function evaluate(){
  result=eval(currentInput.innerText);
  displayOutput.innerText=result;
}

for(let i=0;i<19;i++){
  button[i].addEventListener("click",function(){

    if(this.id==="ac"){
      clear();
    }else if(this.id=="del"){
      storage.pop();
      container="";
      for(var i=0;i<storage.length;i++){
        container+=storage[i];
        currentInput.innerText=container;
        displayOutput.innerText="="+container;
      }
    }else{
      while(this.id!=="="){
        storage.push(this.id);
        container+=storage[storage.length-1];
        if(this.id=="+"||this.id=="-"||this.id=="%"||this.id=="/"||this.id=="*"){
          currentInput.innerText=container;
        }else{
          currentInput.innerText=container;
          displayOutput.innerText="="+container;
        }

        break;
      }
      if(this.id==="="){
        evaluate();
      }
    }
  })
}
//need to check if 2 operators come back to back when evaluating