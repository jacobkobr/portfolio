# Open MC Host

Open MC Host is a web dashboard for running Minecraft Java servers on your own Linux machine or cloud VM. I built it with Node.js and the Docker CLI. Game processes run in containers, while worlds and configuration stay on disk.

## Managing servers

It supports Vanilla, Paper, Purpur, Fabric, Forge, and NeoForge, with exact version selection. The dashboard handles server controls, logs, console commands, files, backups, and resource monitoring.

Modrinth and Hangar searches filter content by compatibility. Before installing a mod or plugin, you can inspect its version and dependencies. Downloads are checked against provider checksums before installation.

## Sharing access

Friends get separate accounts through invitations, with roles, server ownership, quotas, and an audit history. File operations stay within each server's data directory. An optional SSH menu exposes specific actions without giving users a Linux shell.

The dashboard also separates container health from public reachability. A running server doesn't necessarily mean a friend can connect through the firewall or router.

## Links

- [Source code](https://github.com/jacobkobr/open-mc-host)
