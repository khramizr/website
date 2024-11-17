const loadingMessages = [
    "Initializing system...",
    "Loading modules...",
    "Configuring settings...",
    "Starting services...",
    "System ready."
];

let messageIndex = 0;
const loadingElement = document.getElementById('loading-text');

function displayLoadingMessages() {
    if (messageIndex < loadingMessages.length) {
        loadingElement.innerHTML += loadingMessages[messageIndex] + '\n';
        messageIndex++;
        setTimeout(displayLoadingMessages, 800);
    } else {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

function setupThemeToggle() {
    const toggleSwitch = document.getElementById('theme-toggle');
    toggleSwitch.addEventListener('change', function() {
        const isDarkMode = this.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    const initialCheckedState = document.body.classList.contains('dark-mode');
    toggleSwitch.checked = initialCheckedState;
}

window.onload = function() {
    displayLoadingMessages();
    applyInitialTheme();
    setupThemeToggle();
};
