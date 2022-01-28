const switchbtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";
switchbtn.addEventListener("click", ()=>{
  if(switchbtn.checked == true){
    document.body.setAttribute("data-theme", "theme-2");
  }else{
    document.body.setAttribute("data-theme", "");
  }
});

input.forEach((e)=>{
  e.addEventListener("click", (event)=>{
    if(event.target.value == "="){
      if(value.length != 0){
        let newval = eval(value);
        value = newval;
        display.value = value;
      }
    }else if(event.target.value == 'DEL'){
      display.value = display.value.slice('0', -1);
      value = display.value;
    }else if(event.target.value == 'RESET'){
      value = "";
      display.value = value;
    }else if(event.target.value == 'switch'){
    }else{
      value += event.target.value;
      display.value = value;
    }

    if(!event.target.classList.contained("switch")){
      event.target.classList.add("active");
      setTimeout(()=>{
        event.target.classList.remove("active");
      },400);
    }
  });
});