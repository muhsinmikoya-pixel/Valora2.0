# Valora 2.0

## Files
- `public/index.html`: mobile-friendly Valora interface
- `server.js`: Node backend and `/api/health`, `/api/ask`
- `vercel.json`: Vercel deployment configuration
- `render.yaml`, `Dockerfile`: alternative hosting configuration

## Deploy to Vercel
1. Create a GitHub repository named `valora-2-0`.
2. Upload the *contents* of this folder (not the ZIP). Keep `index.html` inside `public/`.
3. Import the repository in Vercel.
4. Root Directory: `./`; Framework Preset: `Other`.
5. Leave build/output commands blank and deploy.

## Important
- Browser location needs HTTPS and permission from the user. Nearby hotels/food use public OpenStreetMap Overpass data and may be unavailable temporarily.
- Product prices are clearly labeled example catalogue prices, not live offers. Real retailer prices/stock require a shopping data provider.
- The Ask Valora interface has a basic built-in response. Actual LLM answers require configuring a real AI provider; never put API keys in the HTML.
- OpenStreetMap data does not include reliable hotel room prices or restaurant menu prices.
