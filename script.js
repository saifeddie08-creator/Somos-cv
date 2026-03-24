// تاريخ بداية علاقتكما (عدله حسب رغبتك)
const start = new Date('2023-10-15'); 

function updateCounter() {
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').innerText = diff;
}

function handleSend() {
    const input = document.getElementById('msg-input');
    if (input.value.trim() === "") return;
    
    const chat = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.className = "bg-pink-600/80 p-3 rounded-2xl rounded-tr-none ml-auto max-w-[85%]";
    div.innerText = input.value;
    chat.appendChild(div);
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

function sendVibe(emoji) {
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    alert("لقد أرسلت " + emoji + " لشريكك!");
}

updateCounter();
