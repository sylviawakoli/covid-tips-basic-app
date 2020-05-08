var splashScreen = document.getElementById("splash-screen");
setTimeout(function() {
    splashScreen.remove();
}, 1900);

var subheaders = document.getElementsByClassName("subheader");

for (var i = 0; i < subheaders.length; i++) {
    subheaders.item(i).addEventListener("click", onSubheaderClick.bind(null, i + 1));
}

function onSubheaderClick(topicNum) {
    var topicContentElem = document.getElementById("topic" + topicNum);
    topicContentElem.style.display = topicContentElem.style.display === "none" ? "block" : "none";
}

var topics = document.getElementsByClassName("topic");

for (var i = 0; i < topics.length; i++) {
    topics.item(i).style.display = "none";
}