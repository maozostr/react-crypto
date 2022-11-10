import { useMemo } from 'react';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ReloadIcon } from '../../icons';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import CoinItem from './CoinItem';

import "./Coins.css"


const requestOptions = {
   method: 'GET',
   redirect: 'follow'
};


export default function CoinsList() {
   const [searchValue, setSearchValue] = useState("")

   const { data: coins, error, loading } = useFetch("https://api.coincap.io/v2/assets?limit=1000", requestOptions)


   const filteredCoins = useMemo(() => {
      if (coins) {
         return coins.data.filter((coin) =>
            coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchValue.toLowerCase()))
      }
   }, [searchValue, coins])

   if (error) {
      return <ErrorMessage message={error} />
   }

   if (loading) {
      return <Loader />
   }

   // console.log(coins.data)
   return (
      <>

         <div className='coin_list_actions'>

            <input className='search_coin_input' type="search" placeholder='Search...' onChange={(event) => {
               setSearchValue(event.target.value)
            }} />
            <button className="reload_btn" onClick={() => window.location.reload(false)}>
               {ReloadIcon} <span>Reload</span>
            </button>
         </div>

         <ul className="coins_list">
            <li className="coin_list_item coin_list_item_headers" >
               <span># </span>
               <span>Icon</span>
               <span className='coin_list_item_span'>Symbol</span>
               <span className='coin_list_item_span'> Name</span>
               <span className='coin_list_item_span'>Price</span>
               <span className='coin_list_item_span'>Market Cup</span>
               <span className='coin_list_item_span'>Change 24h</span>
            </li>
            {coins.data?.length > 0 &&
               filteredCoins.map((coin, i) => {
                  return <CoinItem key={coin.id} coin={coin} index={i} />
               })
            }
         </ul>
      </>
   )
}
