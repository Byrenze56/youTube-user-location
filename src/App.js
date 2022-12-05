import { useEffect } from 'react';
import './App.css';
import GetGeoLocation from './functions/get-geolocation';
import LandingPage from './pages/LandingPage';

function App() {

  const dis = GetGeoLocation()
   useEffect(() => {
    localStorage.setItem("userLatitude", JSON?.stringify(dis.userLat));
    localStorage.setItem("userLongitude", JSON?.stringify(dis.userLang));
   }, [dis.userLat, dis.userLang])
  
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
