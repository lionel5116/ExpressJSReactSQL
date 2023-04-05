import NavbarMain from "./NavBarMain/NavbarMain";
import { Route, Routes, HashRouter } from 'react-router-dom'
import JavaScriptTesting from "./components/JavaScriptTesting";
import Alert from './components/reusable/Alert'
import Login from './components/Login/Login'
function App() {
  return (
    <div id="MasterContainer">
      <HashRouter>
        <NavbarMain />
        <section className='container'>
            <Alert />
          </section>
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
          <Route path="/JavaScriptTesting" element={<JavaScriptTesting />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
