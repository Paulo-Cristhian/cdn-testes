var svg = document.getElementsByTagName('svg')

for (let i = 0; i < svg.length; i++) {
    svg[i].setAttribute("id", [i]);
    svg[i].style.cursor = 'copy';

    document.getElementById(svg[i].id).onclick = function () {
        var copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "fixed";
        copyTextarea.style.opacity = "0";
        var s = new XMLSerializer();
        var str = s.serializeToString(svg[i]);
        copyTextarea.textContent = str;
        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);
        launch_toast()
    }
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}