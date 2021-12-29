import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Actors from './components/Actors/Actors';

function App() {
  return (
    <div>
      {/* Header Part */}
      <Header/>
      
      {/* Body Part */}
      <Actors/>
    </div>
  );
}

export default App;
