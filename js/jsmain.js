
// A tab for Nav
// One page 

function openPage(pageName,elmnt,color) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLink");

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }


    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Trigger Off for nav Mobile 
function triggerOff(){
    document.getElementById('navi').checked = false;
    }




// A tab for experience page
// ExpPage
function ExpPage(pageName,elmnt,color) {
    var i, tabExp, tabLinkExp;
    tabExp = document.getElementsByClassName("ExpContent");

    for (i = 0; i < tabExp.length; i++) {
        tabExp[i].style.display = "none";
    }

    tabLinksExp = document.getElementsByClassName("tabLinkExp");

    for (i = 0; i < tabLinksExp.length; i++) {
        tabLinksExp[i].style.backgroundColor = "";
    }


    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpenExp").click();











// Alors on sait 



  