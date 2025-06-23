const input=document.getElementById("input-box");
const listcon=document.getElementById("listcon");

function addtask(){
    if(input.value==''){
        alert("please enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=''
}
listcon.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("check");
 save()
    }
    else if(e.target.tagName==="span"){
        e.tagName.parentElement.remove();
        save()
    }      
},false)

function save(){
    localStorage.setItem("data",listcon.innerHTML);
}
function st(){
    listcon.innerHTML=localStorage.getItem("data");
}
st()