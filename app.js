const createBtn = document.getElementsByClassName("btn");
const notesContainer = document.getElementsByClassName("notes-container");
let notes = document.getElementsByClassName("input-box");


// ----------------------------------------



// -----------------------------------------
createBtn[0].addEventListener('click', ()=>{
    // console.log("hi");

    let inputBoxEle = document.createElement('p');
    let imgEle = document.createElement('img');

    inputBoxEle.setAttribute('contenteditable', 'true');
    inputBoxEle.className = 'input-box';
    imgEle.src = "img/delete.png";

    notesContainer[0].appendChild(inputBoxEle).appendChild(imgEle);
})



