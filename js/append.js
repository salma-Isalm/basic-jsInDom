const namesList = document.getElementById('name-list');
//console.log(namesList)
const li = document.createElement('li')
li.innerText = ' adil'
namesList.appendChild(li)

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');

mainContainer.appendChild(section)

const h1 = document.createElement('h1');
h1.innerText = ' Kinds of Color selection';
section.appendChild(h1)
const ul = document.createElement('ul');
section.appendChild(ul)
const li1 = document.createElement('li');
li1.innerText= 'white color';
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText= 'blue color'
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText= 'black color';
ul.appendChild(li3)

//set InnerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>T-Shart</li>
<li>pent</li>
<li>belt</li>
</ul>
`
mainContainer.appendChild(sectionDress)

