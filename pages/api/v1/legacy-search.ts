// DEPRECATED API ENDPOINT: /api/v1/legacy-search
// Last commit: November 30, 2022 by developer_legacy
// Sentry errors: 0
// Request traffic: 0 (No hits in last 6 months)
// Jira ticket: None
// Status: Barnacle. Safe to completely remove.

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  error: string;
  suggestion: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(410).json({
    error: 'This legacy search API endpoint is deprecated and no longer active.',
    suggestion: 'Please migrate to the consolidated elastic search query system at /api/v2/search.'
  });
}
