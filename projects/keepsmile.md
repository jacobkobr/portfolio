# Keepsmile BLE research

The official app for my LED lights was slow, full of ads, and limited to a short list of effects. I wanted to control the lights directly, but their Bluetooth protocol wasn’t documented.

## Finding the protocol

I used PacketLogger to capture the Bluetooth traffic while changing colors, brightness, and effects in the app. Then I compared the ATT writes to work out which bytes changed with each setting. All the commands go through one GATT characteristic.

## Implementation

Once I had the commands figured out, I built a **Python** CLI and desktop app with **Bleak**. I also built a Mac menu bar app in **Swift with CoreBluetooth**. It supports custom color cycles, voice commands, and light effects.

I’ve tested this on KS03 lights. Other models may use a different protocol.

## Links

- [Source code and protocol notes](https://github.com/jacobkobr/keepsmile-bt-protocol)
