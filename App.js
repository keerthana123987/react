import './App.css';
import Welcome from './Welcome';
import Greetings from "./Greetings"
import Profile from "./Profile";
function App() {
  return (
    <div>
      <Welcome />
      <Greetings />
      <Profile college='SVECW' />
      <Profile branch='IT' />
      
    </div>
  );
}

export default App;
