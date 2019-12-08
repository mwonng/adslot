export async function loadData(endpoint) {
    return fetch(endpoint, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(e => console.log(e))
}

export function getIdFromUUID(UUID) {
    return UUID.slice(0, 5).toUpperCase();
}

export function formatToRate(rate) {
    return (rate / 100).toFixed(2)
}

export function formatToPrice(number) {
    return `$${number.toLocaleString("en-US")}`
}

export function calCost(rate, qty) {
    return (rate / 100 * qty / 1000)
}

export function handleData(bookings, products, sellers) {

    let bookingDetails = bookings.map(b => {
        const productForBooking = products.find(p => p.id === b.productId)
        const sellerForBooking = sellers.find(s => s.id === productForBooking.sellerId)
        return {
            ...b,
            productName: productForBooking.name,
            productRate: productForBooking.rate,
            productSellerId: sellerForBooking.id
        }
    })

    return bookingDetails;
}

export function getSellersIdsFromBookingArr(bookings) {
    let sellerIds = new Set();
    bookings.forEach(booking => {
        sellerIds.add(booking.productSellerId);
    })
    return sellerIds
}