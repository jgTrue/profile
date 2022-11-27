function displayMenu(id){
    id = document.getElementById(id);

    (id.classList.contains('show')) ? id.classList.remove('show') : id.classList.add('show');
    
}