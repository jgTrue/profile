const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function displayMenu(id){
    id = document.getElementById(id);

    (id.classList.contains('show')) ? id.classList.remove('show') : id.classList.add('show');
    
}

const exampleModal = document.getElementById('contactModal')
exampleModal.addEventListener('show.bs.modal', event => {
  const modalBodyInput = exampleModal.querySelector('.modal-body input')
  modalBodyInput.value = recipient
})

// Efecto aparecer contenido
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function overIcon(element){
  (element.classList.contains('fs-5')) ? element.classList.remove("fs-5") : element.classList.add("fs-5");
  
};


const skills = document.getElementById('skills');

const progress = document.querySelectorAll('.progress-bar');

function showProgress () {
  progress.forEach(progress=>{
    const value = progress.dataset.progress;
    progress.style.width = `${value}%`;
    
  })
}

function hideProgress(){
  progress.forEach(progress => {
    progress.style.width = '0px';
  });
}

window.addEventListener('scroll',() =>{
  const sectionPos = skills.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress();
  }else{
    hideProgress();
  }

});

function redirect(element){
  if(!confirm("Vas a salir a una página externa.")){
    element.href = "";
    element.target = "";
  }
  
}


function validateForm(){

  const form = document.getElementById('formContact');
  const remitente = document.getElementById("remitente");
 
  const mail = document.getElementById("mail");
  const telf = document.getElementById("telf");
  const motivo = document.getElementById("motivo");
  const mensaje = document.getElementById("mensaje");
  
  let remitenteVal = remitente.value;
  let mailVal = mail.value;
  let telfVal = telf.value;
  let motivoVal = motivo.value;
  let mensajeVal = mensaje.value;

  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
  let valid = true;

  if(remitenteVal = '' || remitenteVal.lenght > 20){
    alert("El nombre del remitente no es válido.");
    valid = false;
  }
  if(!res.test(String(mailVal).toLowerCase())){
    alert("El email no es válido.");
    valid = false;
  }
  if(!re.test(telfVal)){
    alert("El teléfono introducido no es válido.");
    valid = false;
  }
  if(motivoVal.length > 40){
    alert("El mensaje de motivo es demasiado extenso.");
    valid = false;
  }
  if(mensajeVal.lenght > 140){
    alert("El mensaje es demasiado extenso.")
    valid = false;
  }

  if(valid){
    return true;
  }else{
    return false;
  }
  
}

window.onload = function() {
  let form = document.getElementById('formContact');
  form.onsubmit = validateForm;
}
