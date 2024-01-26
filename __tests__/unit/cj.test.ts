/**
 * @jest-environment node
 */

import { getAccessToken, getProduct, getProductList } from "@/lib/externalRequests/cjDropShipping";
import { describe, expect, test, it, beforeAll } from '@jest/globals';

describe('CJshipping api tests', () => {
    let accessToken: string =`eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNDI5NiIsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJzdWIiOiJicUxvYnFRMGxtTm55UXB4UFdMWnl0cjQ4N0FoY0t3STNSK0cwbE5mZkVBYVlGaFZIT3l5OGlGM3REL0RlbGNkU2FnajAyMnR3WEZZczBYWWdMRnExWlYydGpFWWVUaHVFQm1DQ2dmQXF3QU5aUHNrODF4TVlaRm9LTG9GblF5WCtqcHV4NFVadS9oRkpRbEZTSjdOOTNZaForbitXSjA2Smo1L2JpVmFlUmo1VnIwTmlNMVk5Sko4MzY3QXJTV3poMk8wM1g1RHI5Q1ZnMHhJK2lWRWRhTlRWQzhwbXBmbjV6SGxQcnpkWmROaUFDUnJtZUNxUjI0dGhqVFQvQUJRRUZLQUdNU0ZDSU9OTlJyai84WlZjWVhhQjBNVXAvQ041ckRTKzkrOXJHTT0ifQ.tNwnjEuG00bd4LgQUCsF2griXufvxuGxMhbOUj3ByOE`;
    const email = process.env.CJSHIPPING_EMAIL as string;
    const password = process.env.CJSHIPPING_PASSWORD as string;

    const testProduct = {
        sku: "CJJSBGSP00005"
    }

    // it('should fetch accessToken with email and password', async () => {
    //     const token = await getAccessToken(email, password);
    //     expect(token?.accessToken).toBeDefined();
    //     accessToken = token?.accessToken as string
    //     console.log(token, email, password);

    // })

    it('should fetch products', async () => {
        // console.log(accessToken);
        const products = await getProductList({pageNum:1, pageSize:20}, accessToken);
        // console.log(products);
        expect(products.list.length).toBeGreaterThan(1)

    })

    it('should fetch queried products', async () => {
        // console.log(accessToken);
        const products = await getProductList({pageNum:1, pageSize:20,productName: '3D printer'}, accessToken);
        // console.log(products);
        expect(products.list.length).toBeGreaterThan(1)

    })

    it('should fetch specific product base on sku products', async () => {
        // console.log(accessToken);
        const product = await getProduct(testProduct.sku, accessToken);
        // console.log(products);
        expect(product.productSku).toBe(testProduct.sku)

    })


})