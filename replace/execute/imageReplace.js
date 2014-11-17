console.log("I'm called in webpage");

//---To find a local directory from a webpage you need to call chrome.extension.getURL()
var testSrcUrl = chrome.extension.getURL("data/internet.jpg");

function getAllImageNodes(){
    var imageNodes = {tag:[], css:[]};
    var elements = $('body').find('*');
    for(var i=0; i<elements.length; i++){
        var childNodes = elements[i].childNodes;
        for(var j=0; j<childNodes.length; j++){

            //--- image in tag < img src="">
            if(childNodes[j].nodeName == "IMG"){
                imageNodes.tag.push(childNodes[j]);
            }

            //--- image in css { background-image: url() }
            var $el = $(childNodes[j]);
            if($el.css("background-image") && $el.css("background-image").indexOf('url(') > -1 ){
                imageNodes.css.push(childNodes[j]);
            }
        }
    }
    return imageNodes;
}


function imageReplace(newImageSrcUrl){
    var imageNodes = getAllImageNodes();

    //--- replace < img src="">
    for(var i=0; i<imageNodes.tag.length; i++){
        imageNodes.tag[i].src = newImageSrcUrl;
    }

    //---replace { background-image: url() }
    for(var i=0; i<imageNodes.css.length; i++){
        $(imageNodes.css[i]).css("background-image", "url("+newImageSrcUrl+")");
    }
}



imageReplace(testSrcUrl);
