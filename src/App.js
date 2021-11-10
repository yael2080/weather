import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocationUser from './components/locationUser';
import WeatherUser from './components/weatherUser';
import DateAndHour from './components/dateAndHour';
import Symbol from './components/symbol';
import History from './components/history';
import SearchHistory from './components/SearchHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Nisuy from './components/nisuy';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nisuy/>
      {/* <LocationUser/> */}
      {/* <DateAndHour/> */}
      {/* <Symbol/> */}
      <Router>
        {/* <LocationUser/> */}
                {/* <Link to='/locationUser'>
                   <button className="app-btn-weather"> Weather </button>
                </Link>
                <Link to='/searchHistory'>              
                    <button className="app-btn-history">History</button>
                </Link>
                <Routes>
                    <Route exact path="/locationUser" element={<LocationUser/>}/> 
                    <Route exact path="/searchHistory" element={<SearchHistory/>}/>                   
                </Routes> */}
            </Router>
          </Provider>
    </div>
  );
}

export default App;
