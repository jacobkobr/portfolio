# win-volume

win-volume is a small Windows tray app for changing the volume of whichever app I'm using. It works with keyboard shortcuts or a modifier key and the scroll wheel, so I don't have to open the volume mixer.

## How it works

I built it in **C++** using **Win32 and Windows Core Audio**. It finds the process behind the focused window, then looks for its audio sessions across active output devices. It also matches by executable name because browsers and Electron apps can play audio from a separate process.

Holding a hotkey gradually speeds up the adjustment. Audio sessions are cached during a burst of input, and queued scroll events are combined so fast scrolling doesn't leave a backlog of volume changes.

A small indicator shows the app name and volume on the same monitor as the focused window. It doesn't take focus or intercept clicks, and it follows the Windows light or dark theme.

## Settings

The tray menu lets me change the hotkeys, volume step, scroll modifier, and whether the app starts with Windows. Settings are stored in an INI file beside the executable.

## Links

- [Source code](https://github.com/jacobkobr/win-volume)
