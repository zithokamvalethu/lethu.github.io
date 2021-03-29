// Create a new list item when clicking on the "SUBMIT" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("to-do").value;
  var t = document.createTextNode(Listvalue);
  li.appendChild(t);
  if (ListValue === "") {
    alert("YOU MUST TYPE TO DO!");
  } else {
    document.getElementById("List").appendChild(li);
  }
  document.getElementById("to-do").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
