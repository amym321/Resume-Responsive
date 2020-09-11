function Toggle() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " nav-expand";
    } else {
        x.className = "nav";
        }
    } 