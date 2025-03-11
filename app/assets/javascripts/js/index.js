const menuIcon = document.querySelector('.menu-icon'); // Sélection de l'icône du menu
const menuItems = document.querySelector('.menu-items'); // Sélection des éléments du menu
const menuLinks = document.querySelectorAll('.menu-items li a'); // Sélection des liens du menu
const textContainer = document.querySelector('.text-container'); // Sélection du conteneur de texte
const blurDiv = document.querySelector('.content'); // Sélection du div de flou

// Fonction pour supprimer la classe 'active' de tous les liens
function removeActiveClass() {
    menuLinks.forEach(link => {
        link.classList.remove('active'); // Suppression de la classe active
    });
}

// Écouteur d'événements pour le clic sur un lien du menu
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement de lien par défaut
        removeActiveClass(); // Supprimer la classe active de tous les liens
        link.classList.add('active'); // Ajouter la classe active au lien cliqué
        const targetId = link.getAttribute('href').substring(1); // Récupérer l'identifiant de la cible
        const targetElement = document.getElementById(targetId); // Récupérer l'élément cible
        if (targetElement) {
            const yOffset = -70; // Ajustement pour compenser la hauteur du menu
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset; // Calculer la position y
            window.scrollTo({top: y, behavior: 'smooth'}); // Défiler jusqu'à la position y de manière fluide
        }
    });
});



// Écouteur d'événements pour le clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('show'); // Affichage ou masquage de la liste de navigation

    if (menuItems.classList.contains('show')) {
        menuItems.style.top = menuIcon.offsetHeight + 10 + 'px'; // Positionnement de la liste de navigation
    } else {
        menuItems.style.top = '50px'; // Réinitialisation de la position de la liste de navigation
    }
});

// Désactiver tous les liens de menu au chargement de la page
window.addEventListener('load', () => {
    removeActiveClass(); // Appel de la fonction pour supprimer la classe active de tous les liens
});


/* Ajout */

const skills = {
'HTML': 60,
'CSS': 60,
'Ruby on rails': 30,
'React.js': 10,
'Javascript': 10
// Ajoutez ou modifiez les compétences ici
};

function createSkillElement(skillName, skillValue) {
const container = document.createElement('div');
container.className = 'skill';
container.innerHTML = `
<div class="skill-name">${skillName}</div>
<div class="progress-circle" style="background: conic-gradient(#4d5bf9 ${skillValue * 3.6}deg, #eee ${skillValue * 3.6}deg);">
<span>${skillValue}%</span>
</div>
`;
return container;
}

const skillsContainer = document.getElementById('skills');
Object.keys(skills).forEach(skill => {
skillsContainer.appendChild(createSkillElement(skill, skills[skill]));
});



/* Ajout */

function showContent(id) {
    var contents = document.querySelectorAll('.contient'); // sélectionne toutes les divs avec la classe "content"
    contents.forEach(function(content) {
        if (content.id === id) {
            content.classList.remove('inactive'); // retire la classe "inactive" de la div cliquée
        } else {
            content.classList.add('inactive'); // ajoute la classe "inactive" aux autres divs
        }
    });
}

