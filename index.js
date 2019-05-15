// Write your code here!
document.body.appendChild(element)

var ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

let element = document.querySelector("p#greeting");
element.innerHTML = 'Hello, DOM!'