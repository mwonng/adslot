import { getIdFromUUID, formatToRate, formatToPrice, calCost, handleData, getSellersIdsFromBookingArr } from './index';

it('should get first 5 characters from UUID', () => {
    const UUID = "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a"
    expect(getIdFromUUID(UUID)).toEqual('6c01a'.toUpperCase());
});

it('should get format rate as from 1100 to 11.00', () => {
    const rate = "1100"
    const rate2 = "11100"
    expect(formatToRate(rate)).toEqual(11.00.toFixed(2));
    expect(formatToRate(rate2)).toEqual(111.00.toFixed(2));
});

it('should get format price from number to string with $', () => {
    const price = 1323
    expect(formatToPrice(price)).toEqual('$1,323');
});

it('should calcualte with rate and qty', () => {
    const rate = 1000
    const qty = 4000
    expect(calCost(rate, qty)).toEqual(40);
});

it('should combine product and seller into booking', () => {
    const products = [
        {
            "rate": 1400,
            "sellerId": "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a",
            "name": "Small Desktop Run of Section BTF Half Page",
            "id": "2701ae2a-2399-4dcc-816d-c166cf855678"
        },
        {
            "rate": 700,
            "sellerId": "9b483287-4880-412e-9ca5-45ef50c9d957",
            "name": "Large Tablet Run of Section ATF Interstitial",
            "id": "1937416a-d4e4-4b2b-956e-a57959b93335"
        },
        {
            "rate": 1000,
            "sellerId": "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a",
            "name": "Medium Tablet Homepage ATF Half Page",
            "id": "a610e724-e3ae-4367-afbc-c28308c2c964"
        },
    ]
    const bookings = [
        {
            "quantity": 650000,
            "startDate": "2019-12-01T00:00:00.000Z",
            "endDate": "2019-12-31T23:59:59.999Z",
            "productId": "2701ae2a-2399-4dcc-816d-c166cf855678",
            "name": "Unbranded relationships",
            "id": "1a7f19c1-b741-4d89-adda-b752ecfcbb13"
        },
        {
            "quantity": 106609,
            "startDate": "2019-12-19T00:00:00.000Z",
            "endDate": "2019-12-22T00:00:00.000Z",
            "productId": "2701ae2a-2399-4dcc-816d-c166cf855678",
            "name": "Small portals",
            "id": "ba795d37-38d1-415a-b3e7-1944227965ef"
        },

    ]
    const sellers = [
        {
            "id": "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a",
            "name": "Ledner and Sons"
        },
        {
            "id": "a51fa252-fa0d-4d1c-96f9-9bca1bf394c1",
            "name": "Hickle - Stark"
        }
    ]

    const expetation = [
        {
            "productName": "Small Desktop Run of Section BTF Half Page",
            "productSellerId": "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a",
            "quantity": 650000,
            "startDate": "2019-12-01T00:00:00.000Z",
            "productRate": 1400,
            "endDate": "2019-12-31T23:59:59.999Z",
            "productId": "2701ae2a-2399-4dcc-816d-c166cf855678",
            "name": "Unbranded relationships",
            "id": "1a7f19c1-b741-4d89-adda-b752ecfcbb13"
        },
        {
            "productName": "Small Desktop Run of Section BTF Half Page",
            "productSellerId": "6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a",
            "productRate": 1400,
            "quantity": 106609,
            "startDate": "2019-12-19T00:00:00.000Z",
            "endDate": "2019-12-22T00:00:00.000Z",
            "productId": "2701ae2a-2399-4dcc-816d-c166cf855678",
            "name": "Small portals",
            "id": "ba795d37-38d1-415a-b3e7-1944227965ef"
        }
    ]

    const SellersSet = new Set(['6c01ab94-d9e8-45cf-a8b8-e90cb8c5d42a'])
    expect(handleData(bookings, products, sellers)).toEqual(expetation);
    expect(getSellersIdsFromBookingArr(handleData(bookings, products, sellers))).toEqual(SellersSet);
})