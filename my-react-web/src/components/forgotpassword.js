import React, { useState } from 'react';

const ForgotPassScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleZaloRegister = () => {
    // Xử lý đăng ký tại đây
  };
  
  return (
    
    <div style={style.container}>
  
      
      <div style={style.v1}>
        <h4 style={style.h2}>Vui nhập lại số điện thoại của bạn  </h4>
        <div style={style.inputContainer}>
          <label>Số điện thoại:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} style={style.input} />
        </div>
        <button style={style.button} onClick={handleZaloRegister}>Gửi</button>
        <h6 style={style.h6}>Quay lại</h6>
       
      </div>
    </div>
      
   
  );
};

const style = {
  container: {
    flex: 1,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  v1: {
    height: 400,
    width: 300,
    backgroundColor: "white",
    padding: 20,
    border: '2px solid #007bff',
    borderRadius: '10px',
    marginTop: 100,
   
  },
  h2:{
    color:'#007bff',
    padding: 10
  },
  inputContainer: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    fontFamily:'arial'
  },
  input: {
    backgroundColor: '#f0f0f0', // Màu của ô input
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px 10px',
    marginBottom: '5px'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontFamily:'arial',
    marginLeft:120
  },
  h1:{
    color:'#007bff',
    marginRight: 200,
    padding: 50

  },
  forgot:{
    color:'#007bff',
    marginLeft:100
  },
  h6:{
    color:'#007bff',
  }
  
};

export default ForgotPassScreen;
