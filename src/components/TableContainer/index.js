import React from 'react';
import BookingRow from '../TableRow';
import PropTypes from 'prop-types';
import PlaceHolder from '../EmptyTable'
var moment = require('moment');

function Table({ seller, products, bookings }) {
    const currentBookings = products.data.filter(p => p.sellerId === seller.id)
    let allBookings = []

    currentBookings.forEach(product => {
        const productBookings = bookings.data.filter(b => b.productId === product.id)
        allBookings = [...allBookings, ...productBookings];
    })

    allBookings.sort((a, b) => moment(b.startDate) - moment(a.startDate))

    const line = allBookings.map(pb => {
        const product = products.data.find(p => p.id === pb.productId);
        const now = moment();
        if (now <= moment(pb.startDate)) {
            return false
        }
        const isLive = now >= moment(pb.startDate) && now <= moment(pb.endDate);
        return (
            <BookingRow booking={pb} product={product} key={pb.id} isLive={isLive} />
        )
    })

    const header =
        <thead>
            <tr>
                <th scope="col" className="booking-id">ID</th>
                <th scope="col" className="product-name">Product Name</th>
                <th scope="col" className="text-right booking-qty">Quantity</th>
                <th scope="col" className="text-right booking-rate">Rate</th>
                <th scope="col" className="text-right booking-cost">Cost</th>
            </tr>
        </thead>

    const HasContentTable = () =>
        <table className="table table-sm table-bordered">
            {header}
            <tbody>
                {line}
            </tbody>
        </table>

    return (
        <>
            <h4>{seller.name}</h4>
            {
                line.length > 0 ?
                    <HasContentTable /> :
                    <PlaceHolder />
            }
        </>

    )
}

Table.propTypes = {
    seller: PropTypes.object,
    products: PropTypes.object,
    bookings: PropTypes.object,
}

export default Table;