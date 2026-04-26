# Before / After photo pairs

Drop matched pairs here for the drag-to-compare slider on the homepage and gallery page.

Convention: name them in pairs, e.g.
- `hawthorn-living-before.jpg`
- `hawthorn-living-after.jpg`

To use them in the slider, edit `src/pages/home.tsx` (or `src/pages/gallery.tsx`):

```tsx
<BeforeAfterSlider
  beforeSrc="/before-after/hawthorn-living-before.jpg"
  afterSrc="/before-after/hawthorn-living-after.jpg"
/>
```
