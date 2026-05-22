const messagesData = [
    {type: 'date', content: '2021年12月15日'},
    {author: '白波瀬 智将', time: '11:37', content: '了解です。では、11:50 ごろになったら私の部署に来てください。お待ちしてます。', isMe: false},
    {author: '白波瀬 智将', time: '12:06', content: '12/24 13:00からのトレーニング参加リンクです。ご参考までに。', isMe: false},
    {type: 'date', content: '今日'},
    {author: 'あなた', time: '12:28', content: '○○商事様向け提案書で相談したいことがあるのですが、来週月曜日にお時間いただけないでしょうか？', isMe: true},
    {author: '白波瀬 智将', time: '12:31', content: '了解です。月曜は予定が詰まっていて、11:30 -12:00でも大丈夫ですか？', isMe: false},
    {author: 'あなた', time: '12:36', content: 'ありがとうございます。時間に遅れず参加します。', isMe: true}
];

function renderMessages() {
    const container = document.getElementById('messages');
    container.innerHTML = '';
    
    messagesData.forEach(msg => {
        if (msg.type === 'date') {
            const div = document.createElement('div');
            div.style.textAlign = 'center';
            div.style.color = '#9aa0a6';
            div.style.margin = '12px 0';
            div.style.fontSize = '13px';
            div.textContent = msg.content;
            container.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.className = `message ${msg.isMe ? 'right' : ''}`;
            div.innerHTML = `<div class="message-bubble">${msg.content}</div>`;
            container.appendChild(div);
        }
    });
    
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    if (input.value.trim() === '') return;
    
    messagesData.push({
        author: 'あなた',
        time: '今',
        content: input.value,
        isMe: true
    });
    
    renderMessages();
    input.value = '';
}

window.onload = renderMessages;