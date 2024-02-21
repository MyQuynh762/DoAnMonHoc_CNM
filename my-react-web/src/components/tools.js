import React from 'react';

function Tools() {
  return (
    <div style={style.tools}>
      <div style={style.v1}>
        <div style={style.chat}></div>
        <div style={style.chat}></div>
        <div style={style.chat}></div>
      </div>
      <div style={style.v2}>
        <div style={style.chat}></div>
        <div style={style.chat}></div>
        <div style={style.chat}></div>
      </div>


      
    </div>
  );
}

const style = {
  tools: {
    width: '80px',
    height: '700px',
    border: '1px solid #ccc',
    backgroundColor: '#007bff',
  },
  chat: {
    width: '30px',
    height: '30px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    marginLeft: '20px',
    marginTop:30,
  
  },
  v1:{
    marginTop:30,

  },
  v2:{
    marginTop:250,

  }
  
};

export default Tools;
