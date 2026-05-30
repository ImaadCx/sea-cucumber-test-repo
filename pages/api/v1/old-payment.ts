// DEPRECATED API ENDPOINT: /api/v1/old-payment
// Last commit: June 1, 2023 by developer_payments
// Sentry errors: 2 (last 30 days)
// Request traffic: 15 (last 6 months)
// Jira ticket: PROJ-101
// Jira status: Backlog
// Status: Barnacle. Safe to deprecate and remove. All checkout traffic has migrated to v2.

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Legacy Stripe checkout controller
  console.log('Processing Stripe payment via v1 controller...');
  
  res.status(400).json({
    status: 'error',
    message: 'This payment endpoint is deprecated. All client checkouts should transition to Stripe v2 checkout (/api/v2/checkout).'
  });
}
