
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from "./components/SignUp";



function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/signup"  element={<SignUp/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
