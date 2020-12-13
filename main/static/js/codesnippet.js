function createCodeSnippet(element) {
    var code = element;
    var text = code.innerText;

    var editor = document.createElement("div");
    editor.className = "codeeditor";
    var sidebar = document.createElement("ul");
    sidebar.className = "codeeditorsidebar";
    var editortext = document.createElement("ul");
    editortext.className = "codeeditortext";
    editor.appendChild(sidebar);
    editor.appendChild(editortext);

    var lines = text.split("\\n");
    var num = 0;
    console.log(lines);
    for (let line of lines) {
        num += 1;
        let linenum = document.createElement("li");
        linenum.innerText = num;
        let linetext = document.createElement("li");
        while (line.indexOf("\\t") >= 0){
            line = line.replace("\\t", "");
            let tab = document.createElement("span");
            tab.className = "tab";
            linetext.appendChild(tab) 
        }
        if (line.trim().length == 0){
            let tab = document.createElement("span");
            tab.className = "tab";
            linetext.appendChild(tab) 
        }
        linetext.append(line)
        sidebar.appendChild(linenum);
        editortext.appendChild(linetext);
    }
    code.innerHTML = "";
    code.appendChild(editor);
}

