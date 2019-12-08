import React from 'react'
import { getIdFromUUID, formatToRate, calCost, formatToPrice } from '../../utils'

function BookingRow({ booking, product, isLive }) {
    return (
        <tr className={`${isLive && 'high-light'}`}>
            <th scope="row">{getIdFromUUID(booking.id)}</th>
            <td>{product.name}</td>
            <td className="text-right">{booking.quantity.toLocaleString("en-US")}</td>
            <td className="text-right">{formatToPrice(formatToRate(product.rate))}</td>
            <td className="text-right">{formatToPrice(calCost(product.rate, booking.quantity))}</td>
        </tr >
    )
}

export default BookingRow