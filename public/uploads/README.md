# Photo upload folder

Drop new staging photos here, then add them to `src/data/gallery.ts`.

Recommended specs:
- **Format**: JPG (smaller) or WebP (smallest, best quality)
- **Width**: 1600–2000px (the site renders at max ~800px on most screens, but bigger source helps Retina)
- **Aspect**: 4:5 (portrait) works best in the masonry grid; 16:10 for hero / before-after pairs
- **Naming**: lowercase, hyphens-not-spaces, e.g. `hawthorn-living-vacant.jpg`

To register a photo:
1. Save it here, e.g. `/public/uploads/hawthorn-living.jpg`
2. Open `src/data/gallery.ts`
3. Add to the `PHOTOS` array:
   ```ts
   { src: "/uploads/hawthorn-living.jpg", alt: "Hawthorn living room", categories: ["Living", "Vacant"] }
   ```
