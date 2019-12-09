import React, { useState, useEffect, useRef } from 'react';
import SellerTable from './components/TableContainer';
import { loadData } from './utils'
import { ENDPOINT } from './config/endpoint'
import { handleData } from './utils';
import SearchBox from './components/SearchBox'

function App() {
    const [sellers, setSellers] = useState({})
    const [details, setDetails] = useState([])
    const [keyword, setKeyword] = useState("")
    const [bookingResults, setBookingResults] = useState([])
    const timeRef = useRef(undefined)

    useEffect(() => {
        async function fetchData() {
            const allSellers = await loadData(`${ENDPOINT}/sellers`)
            const allProduct = await loadData(`${ENDPOINT}/products`)
            const allBookings = await loadData(`${ENDPOINT}/bookings`)

            setSellers(allSellers)
            const data = handleData(allBookings.data, allProduct.data, allSellers.data)

            setDetails(data);
            setBookingResults(data)
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (keyword === "") {
            setBookingResults(details)
        }
        const regex = RegExp(`^${keyword}`, 'gi');
        const filteredWithQuery = details.filter(d => regex.test(d.productName))

        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }

        timeRef.current = setTimeout((() =>
            setBookingResults(filteredWithQuery)
        ), 250)

        return () => clearTimeout(timeRef.current)
    }, [keyword, details])

    const readyToRender = sellers.data && details;

    const handleSearch = (value) => {
        setKeyword(value)
    }

    return (
        <div className="container" id="app">
            <h2 className="title-two"><strong>Adslot.</strong></h2>
            <div className="row title-area">
                <div className="col-8">
                    <h3>Bookings</h3>
                </div>
                <div className="col-4">
                    <SearchBox keyword={keyword} handleSearch={handleSearch} triggerLength={2} />
                </div>
            </div>

            <hr />
            {
                readyToRender &&
                sellers.data.map(seller => {
                    const sellersBookings = bookingResults.filter(br => br.productSellerId === seller.id)
                    return (<SellerTable seller={seller} bookings={sellersBookings} key={seller.id} keyword={keyword} />)
                })
            }
        </div>
    );
}

export default App;
