
const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

// -----------------------------------------------------------------------------------




function saveData(){
    localStorage.setItem("data", notesContainer.innerHTML);
}

function showData(){
    // notesContainer[0].innerHTML = localStorage.getItem("data");
    notesContainer.innerHTML = localStorage.getItem("data");

}

createBtn.addEventListener('click', ()=>{
    // console.log("hi");

    let inputBoxEle = document.createElement('p');
    let imgEle = document.createElement('img');

    inputBoxEle.setAttribute('contentEditable', 'true');
    inputBoxEle.className = 'input-box';
    imgEle.src = "img/delete.png";

    // notesContainer[0].appendChild(inputBoxEle).appendChild(imgEle);
    notesContainer.appendChild(inputBoxEle).appendChild(imgEle);

    saveData();
});

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){8
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

showData();




