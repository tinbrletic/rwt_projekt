import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/header/Navbar.jsx'
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import './App.css'


function App() {

    return(

        <div>
            <Router>

            <Navbar sticky="top" />

                <Routes>
                <Route exact path='/login'element={<LoginPage />} />
                <Route path='/register'element={<RegisterPage />} />
                
                </Routes>

            </Router>
        </div>

    )
}

export default App