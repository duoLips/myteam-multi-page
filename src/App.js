import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Home from "./components/Home";
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
