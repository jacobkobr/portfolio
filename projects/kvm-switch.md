# KVM Switch

I'm working on a project called Handoff. The goal is to use one shortcut to switch a monitor's input and send keyboard and mouse input to another computer over the local network.

## What works so far

I wrote a **Rust** command-line tool that finds connected monitors through the **Windows display APIs**, reads their identity, and queries **DDC/CI** controls.

So far, I've used it to change a monitor's brightness, read the value back, and restore the original setting. I also ran monitor discovery 50 times to check for leaked handles. The handle count stayed stable.

## What’s next

I still need to verify that switching inputs and restoring the original input work reliably on the hardware. After that comes secure communication between the computers and forwarding the keyboard and mouse input.

It's still early. I'm checking what the monitor controls can do before building the rest of the app.

## Links

- [Source code](https://github.com/jacobkobr/kvm-switch/tree/develop)
