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

