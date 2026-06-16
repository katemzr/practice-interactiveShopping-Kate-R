const itemList = document.getElementById("ulItem");
const addbutton = document.getElementById("addButton")
const textBox = document.getElementById("textBox")


addbutton.addEventListener('click', () => {
    const addedText = textBox.value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = addedText;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        itemList.removeChild(li)        
    });
    
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        if(editButton.textContent === "Edit"){
            const editText = document.createElement('input');
            editText.type = 'text';
            editText.value = span.textContent;
            li.replaceChild(editText, span);
            editButton.textContent = 'Save'
        } else {
            const newText = li.querySelector('input');
            span.textContent = newText.value;
            li.replaceChild(span, newText);
            editButton.textContent = 'Edit';
        }
    });

   
    li.appendChild(span);
    li.appendChild(removeButton);
    li.appendChild(editButton);
    itemList.appendChild(li);
    textBox.value = '';
});






/* Coding Lessons w/James
addbutton.addEventListener('click', () => {
    const liSpan = document.createElement('span');

    const addedText = textBox.value;

    const li = document.createElement('li');
    li.textContent = addedText;
   
    const editButton = document.createElement('button');
    editButton.textContent = "Change my freaking name!!";
    editButton.addEventListener('click', () => {
        li.textContent = textBox.value;
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = "I'm melting!!";
    removeButton.addEventListener('click', () => {
        itemList.removeChild(liSpan);
    });


    liSpan.appendChild(li);
    liSpan.appendChild(editButton);
    liSpan.appendChild(removeButton);
    itemList.appendChild(liSpan);

textBox.value = "";

*/
    
