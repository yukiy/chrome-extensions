$(function(){

    console.log("I'm called in popup");


    $('#textBtn').click(function(){

        chrome.tabs.getCurrent(function(){
            chrome.tabs.executeScript({
                file: './jquery.js'
            });

            chrome.tabs.executeScript({
                file: './execute/textReplace.js'
            });

        })

    })


    $('#imageBtn').click(function(){

        chrome.tabs.getCurrent(function(){
            chrome.tabs.executeScript({
                file: './jquery.js'
            });

            chrome.tabs.executeScript({
                file: './execute/imageReplace.js'
            });

        })

    })

})
