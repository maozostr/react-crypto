import { useMemo, useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Chart from "../Chart/Chart";
import PropTypes from 'prop-types';

const daysAgo = [
   {
      label: "1 day",
      value: 1
   },
   {
      label: "7 days",
      value: 7
   },
   {
      label: "30 days",
      value: 30
   },
   {
      label: "3 mounts",
      value: 90
   },
   {
      label: "6 mounts",
      value: 180
   },
   {
      label: "1 year",
      value: 365
   },
   {
      label: "2 year",
      value: 730
   },
   {
      label: "3 year",
      value: 1105
   },
   {
      label: "5 year",
      value: 1840
   },
   {
      label: "all",
      value: 5000
   }
]


export default function CoinChart({ coinId }) {
   const [dayAgo, setDayAgo] = useState(1)
   const { data: values, error, loading, setLoading } = useFetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${dayAgo}`)


   if (loading) {
      return <div className="chart_container">
         <Loader />
      </div>
   }

   if (error) {
      return <ErrorMessage message={error} />
   }

   let dates = []
   let prices = []

   for (let i = 0; i < values.prices.length; i++) {
      if (i % 2 === 0) {
         continue
      }

      let date = new Date(values.prices[i][0]).toDateString()
      let price = Number(values.prices[i][1]).toFixed(2)

      dates.push(date)
      prices.push(price)
   }

   console.log(values)

   return (
      <div className="chart_container">
         <div className="cart_actions">
            <select onChange={(event) => {
               setLoading(true)
               setDayAgo(Number(event.target.value))
            }} defaultValue={dayAgo} >
               {daysAgo.map((d) => <option value={d.value} key={d.label.trim()} >{d.label}</option>)}
            </select>
         </div>
         <Chart
            labelsValues={dates}
            dataValues={prices}
            optionsLabels={{
               dataLabel: "Prices",
               pluginsLabel: `From ${dates[0]}`,
               xLabel: "Date",
               yLabel: "Price $"
            }}
         />
      </div>
   )
}


CoinChart.propTypes = {
   coinId: PropTypes.string.isRequired
}


