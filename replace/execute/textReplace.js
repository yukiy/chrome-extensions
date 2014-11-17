console.log("I'm called in webpage");


function getAllTextNodes(){
    var textNodes = [];
    var elements = $('body').find('*');
    for(var i=0; i<elements.length; i++){
        var childNodes = elements[i].childNodes;
        for(var j=0; j<childNodes.length; j++){
            if(childNodes[j].nodeName == "#text"
                && childNodes[j].textContent.length < 150 //here can be better solution
                && childNodes[j].textContent != " "
                && childNodes[j].textContent != "  "
            ){
                textNodes.push(childNodes[j]);
            };
        }
    }
    return textNodes;
}


function textReplace(replaceStr){
    var textNodes = getAllTextNodes();

    for(var i=0; i<textNodes.length; i++){
        textNodes[i].textContent = replaceStr;
    }
}


textReplace("HELLO CHROME");
