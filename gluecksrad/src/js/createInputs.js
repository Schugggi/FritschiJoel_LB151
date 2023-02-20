export default function createInputs(letters){
    const inputs = document.querySelector(".input")

    let html = ""
    for(let i = 0; i < letters; i++){
        html += '<input type="text" disabled/>'
    }
    inputs.innerHTML = html
}