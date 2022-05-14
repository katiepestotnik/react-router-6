//hook returns object with params after the colon
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const Price = () => {
    const APIKEY = "pk_1a40cb0759a945dda62b0217bb01ac6f"
    // grabbing currency symbol with object destructure
    const { symbol } = useParams()
    const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${APIKEY}`
    
    const [coin, setCoin] = useState(null)
    const [update, setUpdate]= useState(0)
    const getCoin = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCoin(data)

    }
    useEffect(() => {
        getCoin()

        setTimeout(() => { setUpdate(update + 1) }, 5000)
        console.log(coin)
    },[update])
    const loaded = () => {
        return (
            <>
                <h1>Symbol: {coin.symbol}</h1>
                <h3>Price: {coin.price}</h3>
            </>

        )
    }
    const loading = () => {
        return<h1>Loading...</h1>
    }
    return(    coin?loaded():loading())

}
export default Price