let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0



function increment() {
    count += 1 
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr

}
function reset(){
    count = 0
    countEl.innerText = count
}

function deleteAll(){
    saveEl.textContent = "Previous Entries: "
    count = 0
    countEl.innerText = count
}
