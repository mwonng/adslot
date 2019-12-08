import { getIdFromUUID, formatToRate, formatToPrice, calCost } from './index';

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