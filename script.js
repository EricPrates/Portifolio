let btnOpen = document.querySelectorAll('.project-card > button');
let btnClose = document.querySelectorAll('.card-content button');
let topics = document.querySelectorAll('.list-elements');
let wrappers = document.querySelectorAll('.img-wrapper');
let links = document.querySelectorAll('.link-container p');
let projectCards = document.querySelectorAll('.project-card');


btnOpen.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.nextElementSibling;
        content.classList.remove('hidden');
        button.classList.add('hidden');

    });
});



btnClose.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.parentElement;
        const openBtn = content.previousElementSibling;
        content.classList.add('hidden');
        openBtn.classList.remove('hidden');
    });
});



const iconMap = {
    'Java Swing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
    'Typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Consumo de API REST': 'https://cdn.simpleicons.org/postman/FF6C37',
    'Supabase': 'https://cdn.simpleicons.org/supabase/3ECF8E',
    'Express': 'https://cdn.simpleicons.org/express/ffffff',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
}

function getIconSize() {
    return window.innerWidth < 600 ? 20 : 30
}

topics.forEach((topic) => {
    const text = topic.textContent.trim()
    const src = iconMap[text]

    if (src) {
        const img = document.createElement('img')
        img.src = src
        img.width = getIconSize()
        img.style.marginRight = '20px'
        img.style.verticalAlign = 'middle'
        topic.insertAdjacentElement('afterbegin', img)
    }
})


window.addEventListener('resize', () => {
    document.querySelectorAll('.list-elements img').forEach(img => {
        img.width = getIconSize()
    })
})

links.forEach((link) => {
    if (link.innerHTML.includes('GitHub')) {
        let imgGitHub = document.createElement('img');
        imgGitHub.src = 'https://cdn.simpleicons.org/github/FFFFFF';
        imgGitHub.width = 20;
        link.insertAdjacentElement('afterbegin', imgGitHub);
        imgGitHub.style.marginRight = '20px';
        imgGitHub.style.marginBottom = '5px';
        imgGitHub.style.verticalAlign = 'middle';
    }
    if (link.innerHTML.includes('Vercel')) {
        let imgVercel = document.createElement('img');
        imgVercel.src = 'https://cdn.simpleicons.org/vercel/FFFFFF';
        imgVercel.width = 20;
        link.insertAdjacentElement('afterbegin', imgVercel);
        imgVercel.style.marginRight = '20px';
        imgVercel.style.marginBottom = '5px';
        imgVercel.style.verticalAlign = 'middle';
    }
    if (link.innerHTML.includes('Render')) {
        let imgRender = document.createElement('img');
        imgRender.src = 'https://cdn.simpleicons.org/render/FFFFFF';
        imgRender.width = 20;
        link.insertAdjacentElement('afterbegin', imgRender);
        imgRender.style.marginRight = '20px';
        imgRender.style.marginBottom = '5px';
        imgRender.style.verticalAlign = 'middle';
    }
});



