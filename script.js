let btn = document.querySelectorAll('.project-card button');
let btnclose = document.querySelectorAll('.card-content button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.nextElementSibling.classList.contains('hidden')) {
            
            button.nextElementSibling.classList.remove('hidden');
            button.classList.add('hidden');
            
        } else {
            button.nextElementSibling.classList.add('hidden');
            button.classList.remove('hidden');
            
          
        }
        
    });
});

btnclose.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.parentElement.classList.contains('hidden')) {
            button.parentElement.classList.remove('hidden');
            button.parentElement.previousElementSibling.classList.add('hidden');
        } else {
            button.parentElement.classList.add('hidden');
            button.parentElement.previousElementSibling.classList.remove('hidden');
        }
    });
});