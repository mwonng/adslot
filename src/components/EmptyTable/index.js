import React from 'react'

function PlaceHolder({ keywords }) {
    const placehoder = keywords ? `No bookings match your search term ${keywords}` : "No active booking"
    return (
        <table className="table table-sm table-bordered">
            <tbody>
                <tr className="no-active">
                    <td colSpan="5">{placehoder}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PlaceHolder