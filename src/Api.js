import React, { useState, useEffect } from 'react'

import Row from './components/Row/Row'
const Api = (props) => {
  const apiKey = '12f54d4214ab49bd8d6ddd1a2af6a4a0'
  const BaseUrl = 'https://api.rawg.io/api/games?dates=2015-09-01%2C2019-09-30&key=12f54d4214ab49bd8d6ddd1a2af6a4a0&page='

  const [games, setGames] = useState([''])


  useEffect(() => {
    try {
      fetch(BaseUrl + `${props.num}`).then(response => {
        return response.json();
      }).then(data => {
        setGames(data.results)
      })
    } catch (error) {
      console.log(error)
    }
  }, []);
  return <Row value={games} heading={props.h1} />;
}

export default Api