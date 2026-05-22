const messagesData = [
    {type: 'date', content: '2021年12月15日'},
    {author: '白波瀬 智将', time: '11:37', content: '了解です。では、11:50 ごろになったら私の部署に来てください。お待ちしてます。', isMe: false},
    {author: '白波瀬 智将', time: '12:06', content: '12/24 13:00からのトレーニング参加リンクです。', isMe: false},
    {type: 'date', content: '今日'},
    {author: 'あなた', time: '12:28', content: '○○商事様向け提案書で相談したいことがあるのですが、来週月曜日にお時間いただけないでしょうか？', isMe: true},
    {author: '白波瀬 智将', time: '12:31', content: '了解です。11:30-12:00でも大丈夫ですか？', isMe: false},
    {author: 'あなた', time: '12:36', content: 'ありがとうございます。', isMe: true}
];

function renderMessages() {
    const container = document.getElementById('messages');
    container.innerHTML = '';
    messagesData.forEach(msg => {
        if (msg.type === 'date') {
            const d = document.createElement('div');
            d.style.textAlign = 'center';
            d.style.color = '#888';
            d.style.margin = '10px 0';
            d.textContent = msg.content;
            container.appendChild(d);
        } else {
            const m = document.createElement('div');
            m.className = `message ${msg.isMe ? 'right' : ''}`;
            m.innerHTML = `<div class="message-bubble" style="background:${msg.isMe ? '#0e7cff' : '#3c3f41'}; color:${msg.isMe ? 'white' : 'inherit'}">${msg.content}</div>`;
            container.appendChild(m);
        }
    });
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    if (input.value.trim()) {
        messagesData.push({author: 'あなた', time: '今', content: input.value, isMe: true});
        renderMessages();
        input.value = '';
    }
}

window.onload = renderMessages;