const emojiInput = document.getElementById('emoji-input');
const emojiResults = document.getElementById('emoji-results');

// Sample emoji data
const emojis = [
    { emoji: '😀', keywords: ['grinning', 'happy', 'smile'] },
    { emoji: '😂', keywords: ['laughing', 'funny', 'joy'] },
    { emoji: '😍', keywords: ['heart', 'love', 'adoration'] },
    { emoji: '😢', keywords: ['sad', 'cry', 'tear'] },
    { emoji: '😎', keywords: ['cool', 'sunglasses', 'chill'] },
    // Add more emojis as needed
];

// Function to filter emojis based on input
function filterEmojis() {
    const query = emojiInput.value.toLowerCase();
    emojiResults.innerHTML = '';

    const filteredEmojis = emojis.filter(emoji => 
        emoji.keywords.some(keyword => keyword.includes(query))
    );

    if (filteredEmojis.length === 0) {
        emojiResults.innerHTML = '<p>No emojis found.</p>';
    } else {
        filteredEmojis.forEach(emoji => {
            const emojiDiv = document.createElement('div');
            emojiDiv.className = 'emoji';
            emojiDiv.textContent = emoji.emoji;
            emojiDiv.onclick = () => copyToClipboard(emoji.emoji);
            emojiResults.appendChild(emojiDiv);
        });
    }
}

// Function to copy emoji to clipboard
function copyToClipboard(emoji) {
    navigator.clipboard.writeText(emoji).then(() => {
        alert(`Copied: ${emoji}`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Event listener for input
emojiInput.addEventListener('input', filterEmojis);