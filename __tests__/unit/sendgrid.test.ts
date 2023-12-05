/**
 * @jest-environment node
 */

import { addToSendGrid } from "@/lib/externalRequests/sendgrid";
import { describe, expect, test, it } from '@jest/globals';

describe('Testing sendgrid endpoint', () => {

  it('should successfully add contact to sendgrid', async () => {
    const resp =await addToSendGrid({ email:'test@email.com',firstName:"test", lastName:'last', city: 'TEst city' })
    expect(resp).toBe(202);
  });

  

});
