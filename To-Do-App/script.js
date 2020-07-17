let ourForm = document.getElementById("ourForm")
let tField = document.getElementById("tField")
let uList = document.getElementById("uList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(tField.value)
})

function createItem(x) {
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
    uList.insertAdjacentHTML("beforeend", ourHTML)
    tField.value = ""
    tField.focus()
}

function deleteItem(toDelete) {
    toDelete.parentElement.remove()
}
