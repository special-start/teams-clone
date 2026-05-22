// script.js
const messagesData = [
    {
        type: "date",
        content: "今日"
    },
    {
        isMe: false,
        content: "おはよ〜！今日もいい天気だね☀️"
    },
    {
        isMe: true,
        content: "おはよ！ほんと気持ちいいね"
    },
    {
        isMe: false,
        content: "ねえねえ、今日のお昼どうする？近くに新しくできたパスタ屋さんあるんだけど行ってみない？"
    },
    {
        isMe: true,
        content: "おお！いいね！何時くらいがいい？"
    },
    {
        isMe: false,
        content: "12:30くらいはどう？私はその時間空いてるよ〜"
    },
    {
        isMe: true,
        content: "了解！12:30でいいよ。楽しみ〜"
    },
    {
        isMe: false,
        content: "やったー！最近クリーム系のパスタがめっちゃ美味しそうなんだよね"
    },
    {
        isMe: true,
        content: "クリーム系好きなんだ！じゃあ絶対それ頼もう"
    },
    {
        isMe: false,
        content: "うんうん！楽しみにしてるね♪"
    }
];

function renderMessages() {
    const container = document.getElementById('messages');
    container.innerHTML = '';

    messagesData.forEach(msg => {
        if (msg.type === "date") {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date-divider';
            dateDiv.textContent = msg.content;
            container.appendChild(dateDiv);
        } else {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.isMe ? 'right' : 'left'}`;

            let avatarHTML = '';
            if (!msg.isMe) {
                avatarHTML = `<div class="avatar">🌸</div>`;
            }

            messageDiv.innerHTML = `
                ${avatarHTML}
                <div class="message-content">
                    <div class="message-bubble">${msg.content}</div>
                </div>
            `;
            container.appendChild(messageDiv);
        }
    });

    // 最下部にスクロール
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();

    if (text === '') return;

    // 新しいメッセージを追加
    messagesData.push({
        isMe: true,
        content: text
    });

    renderMessages();
    input.value = '';
}

// Enterキーでも送信可能
document.addEventListener('DOMContentLoaded', function() {
    renderMessages();

    const input = document.getElementById('message-input');
    input.focus();
});
