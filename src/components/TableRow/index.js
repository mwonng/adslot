import React from 'react'
import { getIdFromUUID, formatToRate, calCost, formatToPrice } from '../../utils'

function BookingRow({ booking, isLive }) {
    return (
        <tr className={`${isLive && 'high-light'}`}>
            <th scope="row">{getIdFromUUID(booking.id)}</th>
            <td>{booking.productName}</td>
            <td className="text-right">{booking.quantity.toLocaleString("en-US")}</td>
            <td className="text-right">{formatToPrice(formatToRate(booking.productRate))}</td>
            <td className="text-right">{formatToPrice(calCost(booking.productRate, booking.quantity))}</td>
        </tr >
    )
}

export default BookingRow