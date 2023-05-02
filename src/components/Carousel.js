import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../config/api'
import { CryptoState } from '../CryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { numberWithCommas } from './CoinsTable'

const carouselStyles = {
  height: "50%",
  display: "flex",
  alignItems: "center"
}

const carouselItemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
}

const Carousel = () => {
  const [trending, setTrending] = useState([])
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data)
  }

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency])

  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0
    return (
      <Link
        style={carouselItemStyles}
        to={`/coins/${coin.id}`}
      >
        <img src={coin?.image} alt={coin.name} height="80" style={{ marginBottom: 10 }} />
        <span>
          {coin?.symbol}
          &nbsp;
          <span style={{
            color: profit ? "green" : "red",
            fontWeight: 500
          }}>
            {profit && "+"}  {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}{numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4,
    },
  };

  return (
    <div style={carouselStyles} >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  )
}

export default Carousel