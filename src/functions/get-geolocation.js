import { useEffect, useState } from "react";
import axios from "axios";

const GetGeoLocation = () => {
  const [userLat, setUserLat] = useState(null);
  const [userLang, setUserLang] = useState(null);
  useEffect(() => {
    getMapData();
  }, []);
  const getMapData = async () => {
    try {
      await axios
        .post(
          `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCDxIUTelIrQXBbeUyF5_jFqhIu-m9A_uQ`
        )
        .then((result) => {
          setUserLat(result?.data?.location?.lat);
          setUserLang(result?.data?.location?.lng);
        });
    } catch (error) {
      console.error(error);
    }
  };
  
  return { userLat, userLang };
};
export default GetGeoLocation;