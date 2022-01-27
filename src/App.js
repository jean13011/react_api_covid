import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Country from "./components/Country/Country";
import Help from "./components/Help/Help";

function App() {

  return (
    <div className="App">
        <Router>
            <NavBar />
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/country"  element={<Country/>}/>
                <Route path="/help"  element={<Help/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
