/**
 * @jest-environment node
 */


import { NewRecordType } from "@/lib/externalRequests/notion";
import { addToSendGrid } from "@/lib/externalRequests/sendgrid";
import { describe, expect, test, it } from '@jest/globals';

describe('Testing sendgrid endpoint', () => {

  it('should successfully add contact to sendgrid', async () => {
    process.nextTick(() => { }); // to enure axios exits
    expect(await addToSendGrid({ email:'email' })).toBe(202);
  });

});
