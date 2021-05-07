// Write your code here
main.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id='victory';
newHeader.innerHTML="<h1>YOUR-NAME is the champion</h2>";

element.style.backgroundColor = '#27647B'; 
 
// So I am hoping that this doesn't become my blog, otherwise, I'm wasting the medium account I created. 
// Anyways, it's me J! To be honest I had some trouble with this lab and...another lab. 
// *COUGH* grafitti lab *COUGH* 
// They both we're pretty challenging but I figured it out in the end! BUT WOW. DID I HATE IT.
// Regardless, here is what I did and what it all means. 
// first off, I am trying to append the child and create a new header for our browser.
// We start by calling main and invoking remove. Why we do this is so that way, a dev like me-self can
// remove unneccessary element like main#main. By doing this, I removed the element main#main 
// Moving down, I made newHeader constant because I want that variable to remain the same. 
// Then I called the elements for header one, because I thought having a drab ugly Header was garbage. 
// How this is done is through document.createElement().
// To append the variable and add on the new header, 
//  I wrote document.body.appendChild(newHeader); This is done by 
// chaining document and body together because "we are trying to glue a new leaf to a tree that already exist". 
// 
// Then I added "id" because I wanted to put "victory" in a certain spot, devs use id in JS to
// manipulate certain areas. Here I used it to add a new node. Then I added my super awesome, not even generic
// Header! It def makes me the new mark zuckerburg huh??
// 
// for funsies, I tried adding a background color to this, but IDK what went wrong. I'm probs gonna look it up later. 
// 
// And that's how I did it! Love -J