# Discrypt

A [BetterDiscord](https://betterdiscord.app/) plugin that adds end-to-end **PGP encryption** to Discord messages.

## Features

- Generate and manage PGP key pairs directly within Discord
- Encrypt outgoing messages so only the intended recipient can read them
- Decrypt incoming PGP-encrypted messages inline
- Share your public key as a contact card for easy key exchange
- Embeds [OpenPGP.js](https://openpgpjs.org/) — no external dependencies required

## Installation

1. Make sure [BetterDiscord](https://betterdiscord.app/) is installed.
2. Download `Discrypt.plugin.js`.
3. Place the file in your BetterDiscord plugins folder:
   - **Windows:** `%AppData%\BetterDiscord\plugins\`
   - **Mac:** `~/Library/Application Support/BetterDiscord/plugins/`
   - **Linux:** `~/.config/BetterDiscord/plugins/`
4. Open Discord → Settings → Plugins → enable **Discrypt**.

## Usage

### Setting Up Keys
1. Open the Discrypt plugin settings.
2. Generate a new PGP key pair (or import an existing one).
3. Share your **public key** with contacts you want to communicate with securely.

### Encrypting a Message
1. Add a contact's public key in the plugin settings.
2. When composing a message, use the Discrypt button/command to encrypt it before sending.

### Decrypting a Message
Encrypted messages received from contacts who have your public key are automatically decrypted and displayed inline.

### Contact Cards
Public keys can be shared as contact cards directly in Discord, making key exchange straightforward.

## How It Works

Discrypt uses **asymmetric PGP encryption** (via OpenPGP.js v6.3.0):

- Each user has a **public key** (shared openly) and a **private key** (kept secret).
- Messages are encrypted with the recipient's public key — only their private key can decrypt it.
- This means even if your messages are intercepted or Discord's servers are compromised, the content remains unreadable to anyone without the private key.

## Requirements

- [BetterDiscord](https://betterdiscord.app/)
- Discord desktop client

## License

See [OpenPGP.js license](https://github.com/openpgpjs/openpgpjs/blob/main/LICENSE) for the embedded library (LGPL).
