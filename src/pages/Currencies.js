import { Link } from 'react-router-dom'

const Currencies = () => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTCUSD" },
        { name: "Litecoin", symbol: "LTCUSD" },
        { name: "Ethereum", symbol: "ETHUSD" },
        { name: "Zcash", symbol: "ZECUSD" },
        { name: "Bitcoin Cash", symbol: "BCHUSD" },
    ]
    return(
        <div className="currencies">
            {/* destructured name and symbol of the ele of map  */}
            {currencies.map(({name, symbol}, idx)=>{
                return(
                    <Link key={idx}to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )

            })}
        </div>
    )
}
export default Currencies