
import Header from "./components/header";
import ChatPanel from "./components/chatPanel";
import Tools from "./components/tools";
import ChatFrame from "./components/chatFrame";
import RegisterScreen from "./components/dangki";
import LoginScreen from "./components/dangnhap";
import ForgotPassScreen from "./components/forgotpassword";
function App() {
  return (
    <div className="App">
       <Header />
      <div className="content" style={style.contentContainer}>
      <Tools />
      <ChatPanel />
      <ChatFrame></ChatFrame>
      </div> 
      {/* <ForgotPassScreen></ForgotPassScreen> */}
    
    </div>
  );
}

const style = {
  contentContainer: {
    display: 'flex',
  },
};

export default App;