import React, { useState, useEffect } from 'react';
import SellerTable from './components/TableContainer';
import { loadData } from './utils'
import { ENDPOINT } from './config/endpoint'
import { handleData, getSellersIdsFromBookingArr } from './utils'
function App() {
    const [sellers, setSellers] = useState({})
    const [products, setProducts] = useState({})
    const [bookings, setBookings] = useState({})

    useEffect(() => {
        async function fetchData() {
            const allSellers = await loadData(`${ENDPOINT}/sellers`)
            const allProduct = await loadData(`${ENDPOINT}/products`)
            const allBookings = await loadData(`${ENDPOINT}/bookings`)
            setSellers(allSellers)
            setProducts(allProduct)
            setBookings(allBookings)
            const data = handleData(allBookings.data, allProduct.data, allSellers.data)
        }
        fetchData();
    }, [])

    const readyToRender = sellers.data && products.data && bookings.data;


    return (
        <div className="container" id="app">
            <h3><strong>Adslot.</strong></h3>
            <h4>Bookings</h4>
            <hr />
            {
                readyToRender &&
                sellers.data.map(seller => <SellerTable seller={seller} products={products} bookings={bookings} key={seller.id} />)
            }
        </div>
    );
}

export default App;
