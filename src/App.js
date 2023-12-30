import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' Component={SplashScreen} />
          <Route path='/login' Component={LoginScreen} />
          <Route path='/signup' Component={SignupScreen} />
      </Routes>
    </Router>
  );
}

export default App;
