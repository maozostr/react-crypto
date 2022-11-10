import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



export default function CoinItem({ coin, index }) {
   const changePercent24Hr = Number(coin.changePercent24Hr).toFixed(3)


   return (
      <Link to={`/coins/${coin.id}`}>
         <li className="coin_list_item" >
            {index + 1}.
            <span>
               <img width="35" height="35" src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
            </span>
            <span className='coin_list_item_span'>{coin.symbol}</span>
            <span className='coin_list_item_span'> {coin.name} </span>
            <span className='coin_list_item_span'> ${Number(coin.priceUsd).toFixed(2)} </span>
            <span className='coin_list_item_span'>${Number(coin.marketCapUsd).toFixed(2)}</span>
            <span className='coin_list_item_span' style={{ color: changePercent24Hr.split("")[0] === "-" ? "crimson" : "lightgreen" }} >%{changePercent24Hr}</span>
         </li>
      </Link>
   )
}


CoinItem.propTypes = {
   index: PropTypes.number,
   coin: PropTypes.object
}