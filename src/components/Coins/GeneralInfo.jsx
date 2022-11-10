import { useFetch } from "../../hooks/useFetch"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import Loader from "../Loader/Loader"

export default function GeneralInfo() {
   const { data, error, loading } = useFetch(`https://api.coingecko.com/api/v3/global`)


   if (error) {
      return <ErrorMessage message={error} />
   }

   if (loading) {
      return <Loader />
   }
   console.log(data)

   return (
      <div className="general_info_container">
         {data &&
            <>
               <div>
                  <h3>Total Market Cup Percentage</h3>
                  {/* market_cap_percentage */}
                  <ul className="general_info_market_cap_percentage_list">
                     {Object.entries(data.data.market_cap_percentage).map(([key, value]) => {
                        return (
                           <li key={key}>
                              <span>
                                 <img width="25" height="25" src={`https://coinicons-api.vercel.app/api/icon/${key}`} />
                              </span>
                              <span>{key.toUpperCase()}</span>
                              <span>%{value}</span>
                           </li>
                        )
                     })}
                  </ul>
               </div>
               <div>
                  <h3>Total Market Cup</h3>
                  <ul className="general_info_total_market_cup_list">
                     {Object.entries(data.data.total_market_cap).map(([key, value]) => {
                        return (
                           <li key={key}>
                              <span>
                                 <img width="25" height="25" src={`https://coinicons-api.vercel.app/api/icon/${key}`} />
                              </span>
                              <span>{key.toUpperCase()}</span>
                              <span>${value}</span>
                           </li>
                        )
                     })}
                  </ul>
               </div>
            </>}
      </div>
   )
}
