// Updated Skills List with Icons
const skills = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "jQuery", icon: "fa-solid fa-code" }, // No specific jQuery icon, using generic code
    { name: "AJAX", icon: "fa-solid fa-exchange-alt" }, // Represents data exchange
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "WordPress", icon: "fa-brands fa-wordpress" },
    { name: "PHP", icon: "fa-brands fa-php" },
    { name: "MySQLi", icon: "fa-solid fa-database" },
    { name: "Laravel", icon: "fa-brands fa-laravel" },
    { name: "Shopify Theme Development", icon: "fa-brands fa-shopify" },
    { name: "Shopify App Development", icon: "fa-brands fa-shopify" },
    { name: "REST API", icon: "fa-solid fa-cloud" }, // Represents APIs
    { name: "GraphQL", icon: "fa-solid fa-network-wired" }, // Network-like icon
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Express", icon: "fa-solid fa-server" }, // Server-related icon
    { name: "MongoDB", icon: "fa-solid fa-leaf" }, // MongoDB’s leaf logo inspiration
    { name: "Remix", icon: "fa-solid fa-layer-group" }, // Stacked layers for Remix
    { name: "Shopify Polaris", icon: "fa-brands fa-shopify" }, // Using Shopify icon
    { name: "C-Language", icon: "fa-brands fa-c" },
    { name: "Java Basic", icon: "fa-brands fa-java" },
    { name: "Git", icon: "fa-brands fa-git-alt" }
];

// Populate skills and handle countdown
document.addEventListener("DOMContentLoaded", () => {
    // Skills with Icons
    const skillsList = document.querySelector(".skills-list");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
        skillsList.appendChild(li);
    });

    // Countdown animation for achievements
    const counters = document.querySelectorAll(".count");
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 50; // Smoothness

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});


const textArray = [
    "Full-Stack Developer | Shopify Expert | Problem Solver",
    "Building Scalable & Optimized Web Applications",
    "Creating Custom Shopify Themes & Plugins",
    "Turning Ideas into High-Performance Websites"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 80;
const erasingSpeed = 50;
const delayBetweenTexts = 3000;

const typedTextElement = document.getElementById("typed-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typedTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});



const myskills = [
    { name: "HTML", icon: "fa-brands fa-html5", percentage: 95 },
    { name: "CSS", icon: "fa-brands fa-css3-alt", percentage: 40 },
    { name: "JavaScript", icon: "fa-brands fa-js", percentage: 85 },
    { name: "jQuery", icon: "fa-solid fa-code", percentage: 95 },
    { name: "AJAX", icon: "fa-solid fa-exchange-alt", percentage: 85 },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", percentage: 70 },
    { name: "WordPress", icon: "fa-brands fa-wordpress", percentage: 40 },
    { name: "PHP", icon: "fa-brands fa-php", percentage: 90 },
    { name: "MySQLi", icon: "fa-solid fa-database", percentage: 80 },
    { name: "Laravel", icon: "fa-brands fa-laravel", percentage: 65 },
    { name: "Shopify Theme Development", icon: "fa-brands fa-shopify", percentage: 95 },
    { name: "Shopify App Development", icon: "fa-brands fa-shopify", percentage: 90 },
    { name: "REST API", icon: "fa-solid fa-cloud", percentage: 80 },
    { name: "GraphQL", icon: "fa-solid fa-network-wired", percentage: 70 },
    { name: "Node.js", icon: "fa-brands fa-node-js", percentage: 85 },
    { name: "React", icon: "fa-brands fa-react", percentage: 75 },
    { name: "Express", icon: "fa-solid fa-server", percentage: 75 },
    { name: "MongoDB", icon: "fa-solid fa-leaf", percentage: 70 },
    { name: "Remix", icon: "fa-solid fa-layer-group", percentage: 65 },
    { name: "Shopify Polaris", icon: "fa-brands fa-shopify", percentage: 75 },
    { name: "C-Language", icon: "fa-brands fa-c", percentage: 50 },
    { name: "Java Basic", icon: "fa-brands fa-java", percentage: 45 },
    { name: "Git", icon: "fa-brands fa-git-alt", percentage: 90 }
];


const skillsList = document.getElementById("skills-list-all");
const showMoreAllBtn = document.getElementById("showMoreAllBtn");

let displayedSkills = 6;

// Function to render skills
function renderSkills(limit) {
    skillsList.innerHTML = "";
    for (let i = 0; i < limit && i < myskills.length; i++) {
        const skill = myskills[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="skill">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
                <div class="progress-bar">
                    <div class="progress" data-percentage="${skill.percentage}"></div>
                </div>
                <span class="percentage">${skill.percentage}%</span>
            </div>
        `;
        skillsList.appendChild(listItem);
    }
    animateProgressBars();
}

// Function to animate progress bars
function animateProgressBars() {
    document.querySelectorAll(".progress").forEach(bar => {
        let percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
    });
}

// Show more skills when button is clicked
showMoreAllBtn.addEventListener("click", () => {
    displayedSkills += 6;
    renderSkills(displayedSkills);
    
    // Hide button if all skills are displayed
    if (displayedSkills >= myskills.length) {
        showMoreAllBtn.style.display = "none";
    }
});

// Initial render
renderSkills(displayedSkills);

document.getElementById("showMoreBtn").addEventListener("click", function() {
    var hiddenWebsites = document.querySelector(".hidden-websites");
    if (hiddenWebsites.style.display === "none") {
        hiddenWebsites.style.display = "flex";
        hiddenWebsites.style.flexWrap = "wrap";
        hiddenWebsites.style.justifyContent = "center";
        this.textContent = "Show Less";
    } else {
        hiddenWebsites.style.display = "none";
        this.textContent = "Show More";
    }
});
