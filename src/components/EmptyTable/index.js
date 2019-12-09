import React from 'react'
import PropTypes from 'prop-types';

function PlaceHolder({ keyword }) {
    const placehoder = keyword ? `No bookings match your search term ${keyword}` : "No active booking"
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

PlaceHolder.propTypes = {
    keyword: PropTypes.string,
}
export default PlaceHolder