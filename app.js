

function function1() {
  var ul = document.getElementById("js-schools");
  var li = document.createElement("li");
  li.setAttribute("id", "element4");
  li.appendChild(document.createTextNode("Some school"));
  ul.appendChild(li);
}

function1();