import React from 'react';

function ChatFrame() {
  return (
    <div style={style.chatFrame}>
      
   <h1 style={style.title}>CHÀO MỪNG BẠN ĐÃ ĐẾN !</h1>

      
    </div>
  );
}

const style = {
  chatFrame: {
    width: '1500px',
    height: '700px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflowY: 'auto',
    marginRight: '10px',
   
  },
  title:{
    marginLeft: 400,
  }
 
 
  
};

export default ChatFrame;
