const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function displayMenu(id){
    id = document.getElementById(id);

    (id.classList.contains('show')) ? id.classList.remove('show') : id.classList.add('show');
    
}

const exampleModal = document.getElementById('contactModal')
exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
  const modalTitle = exampleModal.querySelector('.modal-title')
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