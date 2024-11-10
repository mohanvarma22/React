// we are going to create a custom hook
import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch')
            }
            return res.json()
        })
        .then((res) => {
            setData(res.rates)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching rates:", error)
            setIsLoading(false)
        })
    }, [currency])

    return { data, isLoading }
}

export default useCurrencyInfo