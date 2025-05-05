// Get DOM elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Sample AI responses
const responses = [
    "Well, that's an interesting question! Let me help you with that.",
    "I reckon I can help you figure that out!",
    "Y'all asked a great question! Here's what I think...",
    "Let me connect with my AI partners and get back to you on that.",
    "I'm processing your request through multiple AI services to get the best answer."
];

// Function to add a message to the chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start space-x-4 mb-4';
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="flex-1"></div>
            <div class="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                <p class="text-blue-800">${content}</p>
            </div>
            <img src="https://ui-avatars.com/api/?background=random" 
                 alt="User" 
                 class="w-8 h-8 rounded-full">
        `;
    } else {
        messageDiv.innerHTML = `
            <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150" 
                 alt="Jayci Rae" 
                 class="w-8 h-8 rounded-full">
            <div class="bg-purple-100 rounded-lg p-3 max-w-[80%]">
                <p class="text-purple-800">${content}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle sending messages
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, true);
    userInput.value = '';

    // Simulate AI thinking with typing indicator
    setTimeout(() => {
        // Get random response
        const response = responses[Math.floor(Math.random() * responses.length)];
        addMessage(response);
    }, 1000);
}

// Handle Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for AI service buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent.includes('Add More')) {
                addMessage("I'd be happy to connect with more AI services! This feature is coming soon.");
            }
        });
    });
});
