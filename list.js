const InputBox = document.getElementById("input-box") ; 
const list = document.getElementById("list") ; 

/* AddTask() */ 

function addTask() {
    if(InputBox.value === '') {
        alert("You Should Write Something !") ; 
    }
    else{
        
        // li : 
        let li = document.createElement("li") ; 
        li.innerHTML = InputBox.value ; 
        list.appendChild(li) ; 

        // span : 
        let span = document.createElement("span") ; 
        span.innerHTML = "\u00d7" ; 
        li.appendChild(span) ; 
    }
    InputBox.value = '' ;
    saveData()
}

/* list */ 

list.addEventListener("click" , function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked") ; 
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
       e.target.parentElement.remove() ; 
       saveData()
    }
} , false)


/* SaveData */ 

function saveData () {
    localStorage.setItem("List"  , list.innerHTML) ; 
}

/* Show Tasks */ 
function showTasks () {
    list.innerHTML = localStorage.getItem("List") ;
}
showTasks ()