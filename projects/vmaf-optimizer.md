# VMAF Optimizer

I built a C++ command-line tool that works out the right compression setting for a folder of game clips instead of guessing at one. OBS records my 1080p60 clips at 30-40 Mbps, and most of them don't need anywhere near that.

## How it works

The right CRF depends on the footage. A quiet menu screen and a firefight compress very differently, so one value across a whole library either wastes space on the easy clips or smears the busy ones.

For each clip, the tool cuts a 20 second sample and encodes it at a few CRF values with **ffmpeg**. It scores every encode against the original with **VMAF**, the perceptual quality metric Netflix developed, and keeps the smallest file that still clears a quality floor. If nothing clears it, it falls back to the best score and says so in the report.

In one run, a clip went from 67 MB to 20 MB. CRF 28 would have been half the size again, but it scored too far under the floor, so the tool picked 23.

## Details

The sweep always works on a 20 second sample, no matter how long the clip is. A 15 second 1080p60 clip takes about 70 seconds. On anything over a minute, the final encode is most of the wait and the tuning is close to free.

Compressed copies go to an `optimized` folder and the originals are left alone. A CSV report lists the chosen CRF and score for each clip. Flags let me change the quality floor, codec, preset, and CRF values, or shrink files in place with the originals moved to a backup folder.

## Links

- [Source code](https://github.com/jacobkobr/vmaf-optimizer)
