window.onload = function() {
   let formVar = document.querySelector("form");
   formVar.onsubmit = function(event) {
    event.preventDefault();
    let under16 = document.getElementById("under-16");
    under16.setAttribute("class","hidden");
    let over16 = document.getElementById("over-16");
    over16.setAttribute("class","hidden");
    const age = parseInt(document.getElementById("age").value);
    if (age >=16 ) {
      over16.removeAttribute("class");
    }
    else if (age < 16 ) {
      under16.removeAttribute("class");
    }
  };
};