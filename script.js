let btnOpen = document.querySelectorAll('.project-card > button');
let btnClose = document.querySelectorAll('.card-content button');
let topics = document.querySelectorAll('.list-elements');
let wrappers = document.querySelectorAll('.img-wrapper');
let links = document.querySelectorAll('.link-container p');
let projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('video-modal')
const modalVideo = document.getElementById('modal-video')
const modalClose = document.getElementById('modal-close')


let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }

    })

}, { threshold: 0.2 });


document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('reveal')
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
})

btnOpen.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.nextElementSibling;
        content.classList.remove('hidden');
        button.classList.add('hidden');
    })
})

document.querySelectorAll('a[href$=".mp4"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const src = link.getAttribute('href')
        modalVideo.src = src
        modal.classList.remove('hidden')
        modalVideo.play()
    })
})
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
    modalVideo.pause()
    modalVideo.src = ''
})
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden')
        modalVideo.pause()
        modalVideo.src = ''
    }
})
modalVideo.addEventListener('volumechange', () => {
    if (!modalVideo.muted) {
        modalVideo.muted = true
        modalVideo.volume = 0
    }
})
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
    'API REST': 'https://cdn.simpleicons.org/postman/FF6C37',
    'Supabase': 'https://cdn.simpleicons.org/supabase/3ECF8E',
    'Express': 'https://cdn.simpleicons.org/express/ffffff',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
}

topics.forEach((topic) => {
    const text = topic.textContent.trim()
    const src = iconMap[text]

    if (src) {
        const img = document.createElement('img')
        img.src = src
        img.style.marginRight = '10px'
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
        imgGitHub.style.marginRight = '10px';
        imgGitHub.style.marginBottom = '5px';
        imgGitHub.style.verticalAlign = 'middle';
    }
    if (link.innerHTML.includes('Vercel')) {
        let imgVercel = document.createElement('img');
        imgVercel.src = 'https://cdn.simpleicons.org/vercel/FFFFFF';
        imgVercel.width = 20;
        link.insertAdjacentElement('afterbegin', imgVercel);
        imgVercel.style.marginRight = '10px';
        imgVercel.style.marginBottom = '5px';
        imgVercel.style.verticalAlign = 'middle';
    }
    if (link.innerHTML.includes('Render')) {
        let imgRender = document.createElement('img');
        imgRender.src = 'https://cdn.simpleicons.org/render/FFFFFF';
        imgRender.width = 20;
        link.insertAdjacentElement('afterbegin', imgRender);
        imgRender.style.marginRight = '10px';
        imgRender.style.marginBottom = '5px';
        imgRender.style.verticalAlign = 'middle';
    }
});



