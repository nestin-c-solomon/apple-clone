
import './App.css';
import AppleStore from './components/AppleStore';
import Footer from './components/Footer';
import Gadgets from './components/Gadgets';
import Header from './components/Header';
import Latest from './components/Latest';

function App() {
  return (
    <div >
      <Header/>
      <Latest/>
      <Gadgets/>
      <AppleStore/>

      <Footer/>
    </div>
  );
}

export default App;
