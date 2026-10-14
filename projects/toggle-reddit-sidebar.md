# Toggle Reddit Sidebar

An older Chrome extension I built to hide Reddit's left sidebar. It does one small thing and remembers the setting between page loads.

## How it works

The popup sends a message to a content script, which toggles the sidebar's visibility. The preference is saved with `chrome.storage.local` and applied when the script loads again.

It's plain JavaScript, HTML, and CSS using Manifest V3. The content script targets Reddit's sidebar element directly, so it depends on that page structure staying the same.

## Links

- [Source code](https://github.com/jacobkobr/toggle-reddit-sidebar)
- [Chrome Web Store](https://chromewebstore.google.com/detail/toggle-reddit-sidebar/cindledgojpljflbaioimhmgbkbjffkg)
