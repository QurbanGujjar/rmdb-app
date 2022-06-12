
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import DoubleNav from "./Components/DoubleNav";
import LoginForm from "./Components/LoginForm";
import Signup from "./Components/Signup";
import reducer, { initialState } from './reducer';

function App() {
  return (
    <NoteState >
    <Router>
    <Routes>
    <Route exact path='/login' element={<div><LoginForm /></div>} />
    <Route exact path='/signup' element={<div><Signup/></div>} />
    <Route exact path='/' element={<div><DoubleNav/></div>} />
    </Routes>
  </Router>
  </NoteState>


    // <div className="App">
    //   {/* <h1>Login Form </h1> */}
    //   {/* <DoubleNav/> */}
    //   <LoginForm/>
    // </div>
  );
}

export default App;
