let getinput = document.getElementsByClassName("input")[0];
let getbtn = document.querySelectorAll(".number input");

getbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let clickedValue = e.target.value;
    
    if (clickedValue === "=") {
      try {
        getinput.value = eval(getinput.value);
      } catch (error) {
        getinput.value = "Error";
      }
    } else if (clickedValue === "AC") {
      getinput.value = "";
    } else if (clickedValue === "DE") {
      getinput.value = getinput.value.slice(0, -1);
    } else {
      getinput.value += clickedValue;
    }
  });
});

















