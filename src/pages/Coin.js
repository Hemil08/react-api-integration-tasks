import React, { useEffect, useState } from 'react'
import CoinService from '../services/CoinService'
import styles from '.././assets/styles/Coin.module.css'

const Coin = () => {

  const [search,setSearch] = useState("")
  const [currency,setCurrency] = useState([])

  async function fetchCoin(){
    try{
      const response = await CoinService.getCoin()
      setCurrency(response.data.result)
    }
    catch(error){
      alert(error.message)
    }
  }

  useEffect(()=>{
    fetchCoin()
  },[])


  return (
    <div className={styles.coin}>
        <h2>Crypto Currency App</h2>
        <input type='text' placeholder='Search...' id={styles.searchbar} onChange={(e)=>setSearch(e.target.value)}></input>

        <table>
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Market Cap</th>
                  <th>Price</th>
                  <th>Available Supply</th>
                  <th>Volume(24hr)</th>
                </tr>
            </thead>

            <tbody>
              {currency.filter((val) =>{
                return val.name.toLowerCase().includes(search.toLowerCase())
              }).map((val) => {
                return <tr>
                  <td className={styles.rank}>{val.rank}</td>
                  <td className="logo">
                    <a href={val.websiteUrl}>
                      <img src={val.icon} alt=""/>
                    </a>
                    <p>{val.name}</p>
                  </td>

                  <td className={styles.symbol}>
                    {val.symbol}
                  </td>
                  <td>${val.marketCap}</td>
                  <td>${val.price.toFixed(2)}</td>
                  <td>{val.availableSupply}</td>
                  <td>{val.volume.toFixed(0)}</td>
                  </tr>
              })}
            </tbody>
        </table>
    </div>
  )
}

export default Coin