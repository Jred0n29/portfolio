function addLine(text, style, time, element) {
  var container = document.getElementById(element);
  var t = "";
  for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
          t += "&nbsp;&nbsp;";
          i++;
      } else {
          t += text.charAt(i);
      }
  }
  setTimeout(function () {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;
      container.appendChild(next);
      window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(lines, style, time) {
  lines.forEach(function (line, index) {
      addLine(line, style, index * time, "ascii-container");
  });
}
// --- Funciones para ejecutar cada una de las acciones ---
function displayHelpMenu() {
  helpMenu.forEach(function (option, index) {
    addLine(option, "estilos", index * 100, "command-text");});}

function clearTerminal() {
  var container = document.getElementById("command-text");
  container.innerHTML = "";
}
function executeCommand(command) {
    addLine("Comando no reconocido: " + command, "text-bg-red", 0, "command-text");
}


loopLines(banner, "Aquivan los estilos de tailwinds", 100); 

document.getElementById("input-text").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) { 
      var inputText = document.getElementById("input-text").value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas
      if (inputText === "help") { 
        
        var newParagraph = document.createElement("p");
        newParagraph.innerHTML = '<span class="command">$</span> gestuser ' + inputText;
        var commandTextDiv = document.getElementById("command-text");

// Agregar el párrafo al div "command-text"
        commandTextDiv.appendChild(newParagraph);
        displayHelpMenu();  
        document.getElementById("input-text").value = "";         

      } else if (inputText === "clear") { 
        clearTerminal();
        document.getElementById("input-text").value = "";
          
      } else { 
        var inputText = document.getElementById("input-text").value;
        var newParagraph = document.createElement("p");
        newParagraph.innerHTML = '<span class="command">$</span> gestuser con ' + inputText;
        executeCommand(inputText);
        document.getElementById("input-text").value = "";
      }
  }
});
