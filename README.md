# Valora 2.0 — Progress Update

This is a small update to Valora's single-page app, packaged to run as a Node web service on Render.

## What's improved
- Nearby search tries two public OpenStreetMap Overpass endpoints instead of relying on one.
- Hotel search includes hotels, hostels, and guest houses; food search includes restaurants, cafes, fast food, and food courts.
- Place details can show public map data when present: address, phone, website, opening hours, hotel star category, or cuisine.
- Map links open the selected place's coordinates.
- Typing a different location clears the old GPS coordinates so Valora doesn't silently keep searching the previous location.
- Illustrative photos are labelled as illustrative; they are not claimed to be photos of the exact business.
- The interface clearly says that live room rates, menu prices, retailer prices, and a real AI API are not connected yet.
- Added `/api/health` so you can check whether the server is running.

## Run on Render
1. Upload the contents of this folder to your GitHub repository (keep `public/index.html` inside the `public` folder).
2. In Render, create or update a **Web Service** linked to that repository.
3. Build command: `npm install`
4. Start command: `npm start`
5. Deploy. Test `https://YOUR-SITE.onrender.com/api/health` — it should show JSON with `"ok":true`.

Keep the Root Directory blank if these files are in the top level of the repository.

## Known limits
- Public map data can be incomplete or the public service may be busy.
- Browser location needs HTTPS and user permission.
- Hotel room rates and restaurant menu prices are not available from this map query.
- The Valora question-answer area is a local demo helper, not a connected AI model.
- Product prices are not live retailer prices.
