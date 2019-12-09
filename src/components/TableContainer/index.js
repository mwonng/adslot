import React from 'react';
import BookingRow from '../TableRow';
import PropTypes from 'prop-types';
import PlaceHolder from '../EmptyTable';
var moment = require('moment');

function Table({ seller, bookings, keywords }) {
    let sortedBookings = [...bookings];

    sortedBookings.sort((a, b) => moment(b.startDate) - moment(a.startDate))

    const line = sortedBookings.map(pb => {
        const now = moment();
        if (now >= moment(pb.endDate)) {
            return false
        }
        const isLive = now >= moment(pb.startDate) && now <= moment(pb.endDate);
        return (
            <BookingRow booking={pb} key={pb.id} isLive={isLive} />
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
                bookings.length > 0 ?
                    <HasContentTable /> :
                    <PlaceHolder keywords={keywords} />
            }
        </>

    )
}

Table.propTypes = {
    seller: PropTypes.object,
    products: PropTypes.object,
    bookings: PropTypes.array,
}

export default Table;