const loadingMessages = [
    "your internet is slow lol...",
    "nvm... establishing secure connection...",
    "loading exclusive content...woo",
    "Almost there...",
    "Welcome!"
];

let messageIndex = 0;
const loadingElement = document.getElementById('loading-text');

function displayLoadingMessages() {
    if (messageIndex < loadingMessages.length) {
        loadingElement.innerHTML += loadingMessages[messageIndex] + '\n';
        messageIndex++;
        setTimeout(displayLoadingMessages, 1000); 
    } else {
        
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

window.onload = function() {
    displayLoadingMessages();
};
