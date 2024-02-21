import React, { useState } from 'react';

const RegisterScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleZaloRegister = () => {
    // Xử lý đăng ký tại đây
  };
  
  return (
    
    <div style={style.container}>
      <h1 style={style.h1}>WELCOME YOU !!!!!</h1>
      
      <div style={style.v1}>
        <h2 style={style.h2}>Đăng ký </h2>
        <div style={style.inputContainer}>
          <label>Số điện thoại:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} style={style.input} />
        </div>
        <div style={style.inputContainer}>
          <label>Họ :</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} style={style.input} />
        </div>
        <div style={style.inputContainer}>
          <label>Tên :</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} style={style.input} />
        </div>
        <div style={style.inputContainer}>
          <label>Nhập mật khẩu :</label>
          <input type="text" value={password} onChange={handlePasswordChange} style={style.input} />
        </div>
        <button style={style.button} onClick={handleZaloRegister}>Đăng ký</button>
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
    marginTop: 100
  },
  h2:{
    color:'#007bff'
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
    fontFamily:'arial'
  },
  h1:{
    color:'#007bff',
    marginRight: 200,
    padding: 50

  }
};

export default RegisterScreen;
