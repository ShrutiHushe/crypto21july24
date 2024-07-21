import { useState, useEffect} from "react";
import axios from "axios";

export default function Crypto() {
  const [info, setInfo] = useState([]);
  const [coin, setCoin] = useState("");
  const hCoin = (event) => {setCoin(event.target.value);}

  const finfo = info.filter(c => c.name.toLowerCase().includes(coin.toLowerCase()));
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
  }, []);

  useEffect(() => {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR"
    axios.get(url)
    .then(res => setInfo(res.data))
    .catch(err => alert("issue" + err));
  }, []);

  return (
    <>
      <center>
        <h1> Crypto App by Shruti </h1>
        <form>
          <input type="text" placeholder="enter coin name" onChange={hCoin} value={coin}/>
        </form>
	<br/>
	<table border="5">
	<tr>
		<th> Name </th>
		<th> Symbol </th>
		<th> Icon </th>
		<th> Price </th>
		<th> ATH </th>
		<th> ATL </th>
	</tr>
        {finfo.map((e) => (
          <tr>
 		<td> {e.name} </td>
 		<td> {e.symbol} </td>
 		<td> <img src={e.image}/> </td>
 		<td> ₹{e.current_price} </td>
 		<td> ₹{e.ath} </td>
		<td> ₹{e.atl} </td>
          </tr>
        ))}
      </table>
      </center>
    </>
  );
}