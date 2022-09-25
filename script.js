let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont");
let taskAreaCont=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont");
let allPriorityColors=document.querySelectorAll(".priority-color");
let  modalPriorityColor='black';
let removeBtn=document.querySelector(".remove-btn");
let addModal=true;
let removeFlag=false;
 

addBtn.addEventListener("click",function(){
    if(addModal){
        modalCont.style.display="flex";
    }else{
       modalCont.style.display="none";
    }
          addModal=!addModal;

})

   for(let i=0;i<allPriorityColors.length;i++){
     let priorityDivOneColor=allPriorityColors[i];
     priorityDivOneColor.addEventListener("click",function(){
        for(let j=0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active");
        modalPriorityColor=priorityDivOneColor.classList[0];

     })
      
   }




modalCont.addEventListener("keydown",function(e){
       let key=e.key;
        if(key=='Enter'){
        
              createTicket(taskAreaCont.value,modalPriorityColor);
             taskAreaCont.value="";
             modalCont.style.display="none";
             addModal=!addModal;


        }
       

})
 
   removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color="black";

    }else{
        removeBtn.style.color="red";
    }
     removeFlag=!removeFlag;

   })



  function createTicket(task,ticketColor){


    // <div class="ticket-cont">
    //                   <div class="ticket-color green"></div>
    //                   <div class="ticket-id">#abd</div>
    //                   <div class="task-area">some task</div>
    //                 </div>

      let ticketCont= document.createElement("div");
            ticketCont.setAttribute('class','ticket-cont');
            ticketCont.innerHTML=`<div class="ticket-color ${ticketColor}"></div>
                                <div class="ticket-id">#abd</div>
                                <div class="task-area">${task}</div>`
            mainCont.appendChild(ticketCont);


}
