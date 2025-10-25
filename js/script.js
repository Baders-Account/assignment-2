

function toggleTheme() {
     
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");

    // Save user preference
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
}











const changeProjects = (value) => {
    const choice = value;
    let url ;
    if (choice === 'all') {
        url = "https://api.github.com/users/Baders-Account/starred";
        
    }

    else{
        url = `https://api.github.com/search/repositories?q=user:Baders-Account+topic:${choice}`
    }
    const projectsContainer = document.getElementById('projects-container');

    // Loading while fetching
      projectsContainer.innerHTML = `
    <div class="text-center w-100 py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Loading projects...</p>
    </div>
  `;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
                projectsContainer.innerHTML = '';
        const repos = Array.isArray(data) ? data : data.items;
 
        

       repos.forEach(project => {
 
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'col-6 col-md-6 col-lg-4 mb-4';

  
            const link = document.createElement('a');
            link.href = project.html_url;
            link.target = '_blank';
            link.className = 'anchors'; 

  
            const card = document.createElement('div');
            card.className = 'card shadow-sm h-100 rounded-4'; 

  
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardBody.innerHTML = `
            <h5 class="card-title mb-3">${project.name}</h5>
            <p class="card-text mb-4">${project.description || 'No description available.'}</p>
                `;


            card.appendChild(cardBody);
            link.appendChild(card);
            cardWrapper.appendChild(link);
            projectsContainer.appendChild(cardWrapper);
});

    })
    
    .catch(error => console.error('Error fetching projects:', error));

    
    
};

document.addEventListener("DOMContentLoaded", () => {
  changeProjects("all");
  const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
 

});



const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

const validateName = () => {
  if (userName.value.trim() === '') {
    userName.classList.add('is-invalid');
    return false;
  } else {
    userName.classList.remove('is-invalid');
    userName.classList.add('is-valid');
    return true;
  }
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('is-invalid');
    return false;
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;
  }
};

const validateMessage = () => {
  if (message.value.trim().length == 0) {
    message.classList.add('is-invalid');
    return false;
  } else {
    message.classList.remove('is-invalid');
    message.classList.add('is-valid');
    return true;
  }
};


[userName, email, message].forEach((input) => {
  input.addEventListener('input', () => {
    validateName();
    validateEmail();
    validateMessage();
    submitBtn.disabled = !(validateName() && validateEmail() && validateMessage());
  });
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validateMessage()) {
    alert(`Thank you, ${userName.value}! Your message has been received.`);
    form.reset();
    [userName, email, message].forEach((input) => input.classList.remove('is-valid'));
    submitBtn.disabled = true;
  }
});
