const createBtn = document.getElementsByClassName("btn");
const notesContainer = document.getElementsByClassName("notes-container");
let notes = document.querySelectorAll(".input-box");

showData();


function saveData(){
    localStorage.setItem("data", notesContainer[0].innerHTML);
}

function showData(){
    notesContainer[0].innerHTML = localStorage.getItem("data");
}

createBtn[0].addEventListener('click', ()=>{
    // console.log("hi");

    let inputBoxEle = document.createElement('p');
    let imgEle = document.createElement('img');

    inputBoxEle.setAttribute('contentEditable', 'true');
    inputBoxEle.className = 'input-box';
    imgEle.src = "img/delete.png";

    notesContainer[0].appendChild(inputBoxEle).appendChild(imgEle);

    saveData();
});

notesContainer[0].addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "P"){
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveData();
            }
        })
    }
});





