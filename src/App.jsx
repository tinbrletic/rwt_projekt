import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/header/Navbar.jsx'
import HomePage from './pages/Home.jsx';
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import ListPage from './pages/List.jsx';
import './App.css'

function App() {

    return(

        <div>
            <Router>

                <Navbar />

                <Routes>
                <Route path='/'element={<HomePage />} />
                <Route exact path='/listing'element={<ListPage />} />
                <Route path='/login'element={<LoginPage />} />
                <Route path='/register'element={<RegisterPage />} />
                
                </Routes>

            </Router>
        </div>

    )
}

export default App