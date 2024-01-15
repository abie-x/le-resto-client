import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurentListScreen from './screens/RestaurentListScreen';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' Component={SplashScreen} />
          <Route path='/login' Component={LoginScreen} />
          <Route path='/signup' Component={SignupScreen} />
          <Route path='/home' Component={HomeScreen} />
          <Route path='/restaurents' Component={RestaurentListScreen} />
      </Routes>
    </Router>
  );
}

export default App;
