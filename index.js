var theme = "dark"

function switchDark(){
    document.getElementById("csstheme").remove();
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "dark.css";
    link.id = "csstheme"
    document.head.appendChild(link);
    document.getElementById("themeIcon").src = "icons/lightMode.png";
}

function switchLight(){
    document.getElementById("csstheme").remove();
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "light.css";
    link.id = "csstheme"
    document.head.appendChild(link);
    document.getElementById("themeIcon").src = "icons/darkMode.png";
}

function switchMode(){
    switch (theme) {
        case "dark":
            switchDark()
            break;
    
        case "light":
            switchLight()
            break;
    }
}

function modeButton(){
    switch (theme) {
        case "dark":
            theme = "light";
            break;
        case "light":
            theme = "dark";
            break;
    }
    switchMode()
}
