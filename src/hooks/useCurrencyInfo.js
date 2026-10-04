import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //convert response into JavaScript object
        .then((res) => setdata(res[currency])) //take the required currency data and store it
    },[currency])
    return data
}
export default useCurrencyInfo;