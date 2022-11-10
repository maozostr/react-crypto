import { useEffect, useState } from 'react';


export function useFetch(url, options = {}) {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState("")

   useEffect(() => {
      const abortCont = new AbortController()
      // setLoading(true)
      fetch(url, { signal: abortCont.signal, ...options })
         .then((response) => {
            if (!response.ok) {
               let message = ""
               if (response.status === 404) {
                  message = "Probably the information is not available for this currency"
               }
               throw Error(message + ' Something went wrong')
            }
            return response.json()
         })
         .then((data) => {
            setData(data)
         })
         .catch((err) => {
            if (err.name === 'AbortError') {
               console.log('Fetch aborted');
            } else {
               setError(err.message)
            }
         })
         .finally(() => {
            setLoading(false)

         })

      return () => abortCont.abort()
   }, [url])


   return { data, loading, error, setLoading, setData }
}