import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners';


import Hero from "./components/Hero";
import Api from "./Api";

function App() {
  const [loading, setLoading] = useState(false)
  const [games1, setGames1] = useState([''])
  const [games2, setGames2] = useState([''])
  const [games3, setGames3] = useState([''])
  const [games4, setGames4] = useState([''])


  const apiKey = '12f54d4214ab49bd8d6ddd1a2af6a4a0'
  const BaseUrl = 'https://api.rawg.io/api/games?dates=2015-09-01%2C2019-09-30&key=12f54d4214ab49bd8d6ddd1a2af6a4a0&page='




  useEffect(() => {
    setLoading(true)
    try {
      // 1st
      fetch(BaseUrl + 1).then(response => {
        return response.json();
      }).then(data => {
        setGames1(data.results)
      })
      // 2nd
      fetch(BaseUrl + 2).then(response => {
        return response.json();
      }).then(data => {
        setGames2(data.results)
      })
      //3rd
      fetch(BaseUrl + 3).then(response => {
        return response.json();
      }).then(data => {
        setGames3(data.results)
      })
      //4th
      fetch(BaseUrl + 4).then(response => {
        return response.json();
      }).then(data => {
        setGames4(data.results)
      })
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <div>
      {
        loading ? (
          <HashLoader color="#36d7b7" className='hashloader' style={{ display: 'flex' }} />
        )
          : (
            <div>
              <Hero />
              <Api value={games1} h1='TOP RATED' />
              <Api value={games2} h1='MY LIST' />
              <Api value={games3} h1='BEST SELLING' />
              <Api value={games4} h1='TOP-20' />
            </div>
          )
      }

    </div >
  );
}

export default App;
