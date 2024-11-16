// Loading Screen Messages
const loadingMessages = [
    "your internet is slow lol...",
    "nvm...establishing secure connection...",
    "loading exclusive content...",
    "woooo exclusive...",
    "yes almost there...",
    "anyway..."
];

let messageIndex = 0;
const loadingElement = document.getElementById('loading-text');

function displayLoadingMessages() {
    if (messageIndex < loadingMessages.length) {
        loadingElement.innerHTML += loadingMessages[messageIndex] + '\n';
        messageIndex++;
        setTimeout(displayLoadingMessages, 800); // Delay between messages
    } else {
        // Hide loading screen and show main content
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

// Apply saved theme preference on load
function applyTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Set up theme toggle switch
function setupThemeToggle() {
    const toggleSwitch = document.getElementById('theme-toggle');
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize the website after window loads
window.onload = function() {
    displayLoadingMessages();
    applyTheme();
    setupThemeToggle();
};
