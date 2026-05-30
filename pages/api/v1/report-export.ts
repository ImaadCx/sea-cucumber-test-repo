// DEPRECATED API ENDPOINT: /api/v1/report-export
// Last commit: February 15, 2024 by developer_analytics
// Sentry errors: 3 (last 30 days)
// Request traffic: 45 (last 6 months)
// Jira ticket: None
// Status: Low activity. Flag with warning header.

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Flag as deprecated in the headers
  res.setHeader('Warning', '299 - Deprecated API - Migrate to v2 analytics report endpoint');
  
  res.status(200).json({
    status: 'success',
    message: 'Report export request queued. Note: This endpoint is scheduled for complete deprecation soon.'
  });
}
