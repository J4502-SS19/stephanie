var newLink = document.createElement("a");

var allParagraphs = document.getElementsByTagName("p");

var firstParagraph = allParagraphs[0];

newLink.setAttribute("href", "#");

newLink.setAttribute("class", "more-link");

newLink.innerHTML="Read More";

firstParagraph.appendChild( newLink );

for (var i=0; i < allParagraphs.length; i++ ){
  if(i===0) {
    continue;
  }
  allParagraphs[i].style.display="none";
}

//newLink.style.display = "inline-block";

//newLink.style.marginLeft="0.5em";
