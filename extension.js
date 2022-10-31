let leadsarray = []
const inputLead = document.getElementById("input-lead")
const saveBtn = document.getElementById("save-btn")
const listUl = document.getElementById("list-ul")
let deleteBtn = document.getElementById("delete-btn")
let savetabBtn = document.getElementById("savetab-btn")

savetabBtn.addEventListener("click",function(){

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        leadsarray.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(leadsarray))
        printleads(leadsarray)
    })
})

saveBtn.addEventListener("click",function (){
    leadsarray.push(inputLead.value)
    inputLead.value = ""
    localStorage.setItem("myleads",JSON.stringify(leadsarray))
    printleads(leadsarray)

})

function printleads(arr){
    let listitems = ""
    for(let i=0; i<arr.length; i++){
         listitems += `
         <li>
             <a target = '_blank' href='${arr[i]}'>
                ${arr[i]}
            </a>
        </li>`
    }
    listUl.innerHTML = listitems
}

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if(leadsfromlocalstorage){
    leadsarray = leadsfromlocalstorage
    printleads(leadsarray)
}

deleteBtn.addEventListener("dblclick",function(){
    leadsarray = []
    localStorage.clear()
    listUl.innerHTML = ""
    
    

})