const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function displayMenu(id){
    id = document.getElementById(id);

    (id.classList.contains('show')) ? id.classList.remove('show') : id.classList.add('show');
    
}