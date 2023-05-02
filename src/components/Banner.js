import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Carousel from './Carousel'


const Banner = () => {
  return (
    <Box sx={{
      backgroundImage: "url(./banner2.jpg)",

    }}>
      <Container sx={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "25px",
        justifyContent: "space-around"
      }}>
        <Box sx={{
          display: "flex",
          height: "40%",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center"
        }}>
          <Typography
            variant='h2'
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              fontFamily: "Montserrat"
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>

        </Box>
        <Carousel />
      </Container>
    </Box>
  )
}

export default Banner
