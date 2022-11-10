import { Navigate, useParams } from "react-router"
import parse from 'html-react-parser';
import { useFetch } from "../../hooks/useFetch";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CoinChart from "./CoinCart";

export default function CoinInfo() {

   const { id } = useParams()
   const { data: coin, error, loading } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`)

   if (!id) {
      return <Navigate to="/coins" />
   }

   if (error) {
      return <ErrorMessage message={error} />
   }

   if (loading) {
      return null
   }

   console.log(coin)
   return (
      coin &&
      <div className="coin_info">
         <div className="coin_info_header">
            <img src={coin.image.small} alt={coin.symbol} />
            <h2>{coin.name}</h2>
            <h3 className="coin_info_price">USD  ${coin.market_data.current_price.usd}</h3>
            <p>Genesis {coin.genesis_date} &nbsp; Market Cup Rank: {coin.market_data.market_cap_rank}</p>
         </div>

         <CoinChart coinId={id} />

         <div className="coin_info_description">
            <div className="coin_info_categories">{coin.categories.map((c) => <span key={c} >{c}</span>)}</div>
            <p>
               {parse(coin.description.en)}
            </p>
         </div>

         <div className="coin_info_links">
            <h3>Links</h3>

            <p>Home Page</p>
            <span><a href={coin.links.homepage[0]}> {coin.links.homepage[0]}</a></span>

            {coin.links.blockchain_site?.length > 0 && <>
               <p>Blockchains</p>
               {coin.links.blockchain_site.map((link) => {
                  if (link) {
                     return (
                        <div key={link}> <a target="_blank" href={link}> {link} </a> </div>
                     )
                  }
               })}</>
            }

            {coin.links.repos_url.github?.length > 0 && <>
               <p>Github</p>
               {coin.links.repos_url.github.map((link) => {
                  if (link) {
                     return (
                        <div key={link}> <a target="_blank" href={link}> {link} </a> </div>
                     )
                  }
               })}</>
            }
         </div>

      </div>
   )
}
