import './App.css';
import {Navar} from './component/navar/Navar'
import {Header} from './component/header/Header'
import {SecctionOne} from './component/secctionOne/SecctionOne'
import {SecctioTwo} from './component/secctionTwo/SecctioTwo'
import { SecctionAnimation } from './component/secctionAnimation/SecctionAnimation';


function App() {
  return (
    <div className="App">

      <Navar/>
      <Header/>
      <SecctionOne/>
      <SecctionAnimation/>
      <SecctioTwo/>
    
    </div>
  );
}

export default App;
