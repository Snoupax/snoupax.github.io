function ExpPage(pageName,elmnt,color) {
    var i, tabExp, tabLinkExp;
    tabExp = document.getElementsByClassName("ExpContent");

    for (i = 0; i < tabExp.length; i++) {
        tabExp[i].style.display = "none";
    }

    tabLinksExp = document.getElementsByClassName("tabLinkExp");

    for (i = 0; i < tabLinkExp.length; i++) {
        tabLinksExp[i].style.backgroundColor = "";
    }


    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpenExp").click();