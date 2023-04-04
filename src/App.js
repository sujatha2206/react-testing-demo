import logo from './logo.svg';
import './App.css';
import UserGreetings from './UserGreetings';
import Message from './Message';
import PostsComponent from './PostsComponent';

function App() {
  return (
    <div>
      <header>
      
          Learn React
      
      </header>
      <UserGreetings/>
      <Message messageText='error'/>
      <PostsComponent/>
    </div>
  );
}

export default App;
