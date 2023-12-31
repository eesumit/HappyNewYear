 const words = ['SOHNA 😊', 'Guddu Bua🤗', 'Riyu😁', 'ReelT😏','SohnT🙄', 'Reeyaaaa😂', 'Riya🤠🤪', 'Riya Saini😎'];
// const words = [' sumit', ' kumar'];
let wordIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('name');

function type() {
  if (charIndex < words[wordIndex].length) {
    typewriterElement.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200); // Adjust typing speed here
  } else {
    setTimeout(erase, 1000); // Wait before starting to erase
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100); // Adjust erasing speed here
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500); // Wait before starting to type the next word
  }
}

// Start the typing animation
 
 
 

const enter = document.querySelector("#enter")
const input = document.querySelector("#entry")
const class1 = document.querySelector('.access');
const class2 = document.querySelector('.main');
const class3 = document.querySelector('.message');
const btn = document.querySelector('.btn')

const check = function(){
    if(input.value.trim().toLowerCase() === "sohna"){
        class1.classList.add('hidden');
        class2.classList.remove('hidden');
        setTimeout(type, 500);
    }
    else{
        alert("if "+ input.value+ " is your nickname, sorry you can't access this webpage.")
    }
}
enter.addEventListener("click",check)


class2.addEventListener('click', function () {
    class2.classList.add('hidden');
    class3.classList.remove('hidden');
});
function gotoHome(){
    class2.classList.remove('hidden');
    class3.classList.add('hidden');
}
btn.addEventListener('click',gotoHome)