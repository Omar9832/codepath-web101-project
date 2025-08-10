const themeButton=document.getElementById('theme-button');


const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    
}
themeButton.addEventListener("click", toggleDarkMode);





const submit=document.getElementById("rsvp-button");
const addParticipant = (event, person) => {
    const participants=document.querySelector(".rsvp-participants");
    const paragraph=document.createElement("p");
    paragraph.textContent=`🎟️ ${person.name} from ${person.hometown} joined the team!`;
    participants.appendChild(paragraph);
    
    

}






document.querySelector("#theme-button").addEventListener("click", toggleDarkMode);


const validateForm = (event) => {

  

  
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  let person = {
    name: rsvpInputs[0].value ,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value,


  }
  
    for(let i=0; i<rsvpInputs.length; i++){
      const input=rsvpInputs[i];
      
      if (input.value.trim().length<2){
          containsErrors = true;
          input.classList.add("error");
      }
      else{
          input.classList.remove("error");
      }
    }
    if (containsErrors == false){
        addParticipant(event, person);
        toggleModal(person);
        for (let i=0; i<rsvpInputs.length; i++){
            rsvpInputs[i].value = "";
        }
       
}
}
submit.addEventListener("click", validateForm);

  

const toggleModal = (person) => {
    
    const modal=document.getElementById("success-modal");
    const modalContent=document.getElementById("content");
    modal.style.display="flex";
    modalContent.textContent=`Thanks for RSVPing, ${person.name}! We're so excited to see you at the event!`;
    modalContent.style.color="black";
    



intervalId = setInterval(animateImage, 100);

setTimeout(() => {
        modal.style.display="none";
        clearInterval(intervalId); 
        modalImage.style.transform='rotate(0deg)';
    }, 5000);
    
}


let rotateFactor=0;
modalImage=document.getElementById("modal-img");

const animateImage=()=>{
if (rotateFactor==0){
  rotateFactor=-10;
}
else{
  rotateFactor=0;
}

modalImage.style.transform=`rotate(${rotateFactor}deg)`;



}


