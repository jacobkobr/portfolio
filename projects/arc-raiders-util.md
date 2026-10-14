# ArcRaidersUtil

I built a Python pipeline to turn Arc Raiders inventory screenshots into structured data. The idea was to get item names, quantities, and positions out of an image so they could be used to decide what to keep or sell.

## How it works

I scraped item icons from the wiki and built a reference dataset with Pillow and ImageHash. Each icon gets three perceptual hashes, pHash, dHash, and wHash, so matching doesn't depend on the screenshot having identical pixels to the original icon.

The parser splits a cropped inventory screenshot into a 6-by-4 grid, skips empty slots, and compares the center of each tile with the reference icons. It only accepts a match when all three hash distances fall within their thresholds.

Tesseract reads the stack count from the corner of each tile. The output is JSON grouped by item, with a quantity and grid position for each stack. That gives the cleanup logic something to work with without having to read the screenshot again.

## Links

- [Source code](https://github.com/jacobkobr/ArcRaidersUtil)
