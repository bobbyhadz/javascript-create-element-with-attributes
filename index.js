console.log('bobbyhadz.com');

// ✅ Create element
const el = document.createElement('div');

// ✅ Set Attributes on Element
el.setAttribute('id', 'my-id');
el.setAttribute('title', 'my-title');
el.setAttribute('disabled', '');

// ✅ Set styles on Element
el.style.backgroundColor = 'salmon';
el.style.color = 'white';
el.style.width = '150px';
el.style.height = '150px';

// ✅ Add text content to element
el.textContent = 'Hello world';

// ✅ Or set the innerHTML of the element
// el.innerHTML = `<span>Hello world</span>`;

// ✅ add element to DOM
const box = document.getElementById('box');
box.appendChild(el);
