
import './App.css';
import Footer from './footer/Footer';
import Form from './form/Form';
import Header from './header/Header';
import Main from './main/Main';
import Myworks from './mywork/Myworks';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Myworks/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
