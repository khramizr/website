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
        document.getElementById('theme-toggle').checked = savedTheme === 'dark';
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDark);
        document.getElementById('theme-toggle').checked = prefersDark;
    }
}

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

window.onload = function() {
    displayLoadingMessages();
    applyInitialTheme();
    setupThemeToggle();
};
