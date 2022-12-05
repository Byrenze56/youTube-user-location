import React from 'react'
import { Card, Header } from '../components'

const LandingPage = () => {
 const userLat = JSON.parse(localStorage.getItem("userLatitude"))
  const userLang = JSON.parse(localStorage.getItem("userLongitude"))
  return (
      <>
          <Header title={'My Current Geolocation'} textMain={' according to google is:'} />
          <Card userLat={userLat} userLang={userLang} />
    </>
  )
}

export default LandingPage;