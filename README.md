# Sea Cucumber Test Repository 

This is a dummy codebase designed to simulate and test the **Sea Cucumber AI Agent** barnacle-finding scanner. It contains a mix of active API endpoints and dead endpoints ("barnacles") that are candidates for deprecation and code pruning.

## Endpoints Contained:
1. `pages/api/v1/legacy-search.ts`  **BARNACLE** (No commits since Nov 2022, 0 traffic)
2. `pages/api/v1/old-payment.ts`  **BARNACLE** (No commits since June 2023, 15 hits in 6 months)
3. `pages/api/v1/report-export.ts`  **LOW ACTIVITY** (Low traffic, candidate for deprecation warning headers)
4. `pages/api/v1/user-auth.ts`  **ACTIVE** (High traffic endpoint)
5. `pages/api/v2/checkout.ts`  **ACTIVE** (Active checkout endpoint replacing v1 payment)

## How to use this for the Hackathon Demo:
1. Initialize Git in this directory: `git init`
2. Create a new repository on your GitHub account named `seacucumber-test-repo`.
3. Push these files to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit of legacy project codebase"
   git remote add origin https://github.com/your-username/seacucumber-test-repo.git
   git branch -M main
   git push -u origin main
   ```
4. Enter `https://github.com/your-username/seacucumber-test-repo` into the Sea Cucumber codebase scanner and click **Run Pi Agent Scan**!
