import React, {useEffect, useState} from 'react'
import './App.css';

function Wonmod(){
  const [myWON, setMyWON] = useState('');
  const [exchangerate, setExchangeRate] = useState([])
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD")
    .then(response => response.json())
    .then(json =>{
      setExchangeRate(json)
    })
  }, [])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=200")
    .then(response => response.json())
    .then(json =>{
      setCoins(json);
      setLoading(false);
    })
  }, [])
  return(
    <>
      <input type = "number" value={myWON} onChange = {(event) => {setMyWON(event.target.value)}} placeholder = "Put your WON"/>
      <p>Exchange WON TO USD !</p>
      <p>You have {myWON}won</p>
      {exchangerate.map((e) => <p> So you have {(1/e.basePrice) * myWON}$</p>)}
    </>

  )
}
const Tradingcenter = (props) => {
  const [exchangerate, setExchangeRate] = useState([])
  useEffect(() => {
    fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD")
    .then(response => response.json())
    .then(json =>{
      setExchangeRate(json)
    })
  }, [])

  return(
    <div>{exchangerate.map((er) => (
      <p>Your USD to Won:  {er.basePrice * props.myUSD} won</p>
    ))}
    </div>
  )
}

const App = () => {
  const [loading, setLoading] =useState(true);
  const [coins, setCoins] = useState([]);
  const [myUSD, setMyUSD] = useState('');
  const [Selected, setSelected] = useState("");
  const [exchangerate, setExchangeRate] = useState([]);  
  const [wonvisible, setWonVisible] = useState(false);
  const [tradingcenter, setTradingCenterVisible] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=200")
    .then(response => response.json())
    .then(json =>{
      setCoins(json);
      setLoading(false);
    })
  }, [])
  useEffect(() => {
    fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD")
    .then(response => response.json())
    .then(json =>{
      setExchangeRate(json)
    })
  }, [])

  return(
    <>
      <div>
      <h1>The Coins ! {coins.length}</h1>
      {loading ? <strong>Loading ...</strong> : null}
      <select onChange={handleSelect} value={Selected} >
        {coins.map((coin) => (
          <option value={[coin.quotes.USD.price, coin.symbol]}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
        ))}
      </select>
    </div>
    <button onClick = {() => setWonVisible(!wonvisible)}>WON</button>
    <button onClick={() => setTradingCenterVisible(!tradingcenter)}>USD to WON</button>
    <hr />
    <input type = "number" value={myUSD} onChange = {(event) => {setMyUSD(event.target.value)}} placeholder = "Put your USD"/>
    {wonvisible && <Wonmod/>}
    {tradingcenter && <Tradingcenter props = {myUSD} />}
    <div>{exchangerate.map((er) => (
      <p>Your USD to Won:  {er.basePrice * myUSD} won</p>
    ))}</div>
    <p>You Can Buy {myUSD/Selected.split(',')[0]} {Selected.split(',')[1]}</p>
    </>
  )

}

export default App;
// https://nomadcoders.co/react-for-beginners/lectures/3288
