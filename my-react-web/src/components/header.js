import React from 'react';

function Header() {
  return (
    <div className="App">
      <div style={style.header}>
        <div style={style.avatar}></div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." style={style.searchBarInput} />
          <button style={style.searchBarButton}>Search</button>
        </div>
      </div>
    </div>
  );
}

const style = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  searchBarInput: {
    padding: '8px',
    border: '1px solid #fff',
    borderRadius: '5px',
    marginRight: '15px',
  },
  searchBarButton: {
    padding: '8px 15px',
    backgroundColor: '#fff',
    color: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    marginRight: '16px',
  },
};

export default Header;
