function doSomethingElse() {
  alert("something else");
}

function onload() {
  //populate inning dropdown
  var inningSelector = document.getElementById('innings');
  for (var index = 7; index <= 20; index++){
     var opt = document.createElement("option");
     opt.value= index;
     opt.innerHTML = index; // whatever property it has

     // then append it to the select element
     inningSelector.appendChild(opt);
  }  
}