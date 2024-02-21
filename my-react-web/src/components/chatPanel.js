import React from 'react';

function ChatPanel() {
  return (
    <div style={style.chatPanel}>
      {/* Danh sách cuộc trò chuyện */}
      <div style={style.chatItem}>
        <div style={style.avatar}></div>
        <div style={style.content}>
          <div style={style.name}>Nhi Nhi</div>
          <div style={style.message}>Hello</div>
        </div>
      </div>
      <div style={style.chatItem}>
        <div style={style.avatar}></div>
        <div style={style.content}>
          <div style={style.name}>BaBy</div>
          <div style={style.message}>Mãi yêuuuuu</div>
        </div>
      </div>
    
    </div>
  );
}

const style = {
  chatPanel: {
    width: '300px',
    height: '700px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflowY: 'auto',
    marginRight: '10px',
  },
  chatItem: {
    display: 'flex',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    marginRight: '10px',
  },
  content: {},
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#333',
  },
};

export default ChatPanel;
