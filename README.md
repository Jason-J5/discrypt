# Discrypt

A [BetterDiscord](https://betterdiscord.app/) plugin that adds end-to-end **PGP encryption** to Discord messages and files.

## Features

- Generate and manage PGP key pairs directly within Discord
- Encrypt outgoing messages so only the intended recipient can read them
- Decrypt incoming PGP-encrypted messages inline
- **Encrypt any file** and download it as a `.pgp` file
- **Decrypt `.pgp` files** and restore the original file
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

### Encrypting a File
1. Open the Discrypt panel (🗝️ toolbar button) → **Files** tab.
2. Click or drag any file into the **Encrypt a File** drop zone.
3. Select the recipient contact from the dropdown.
4. Click **Encrypt & Download** — a `.pgp` file is saved to your downloads.
5. Send the `.pgp` file to your contact through Discord or any channel.

### Decrypting a File
1. Open the Discrypt panel → **Files** tab.
2. Drag the received `.pgp` file into the **Decrypt a File** drop zone.
3. Click **Decrypt & Download** and enter your passphrase when prompted.
4. The original file is restored and saved to your downloads.

## How It Works

Discrypt uses **asymmetric PGP encryption** (via OpenPGP.js v6.3.0):

- Each user has a **public key** (shared openly) and a **private key** (kept secret).
- Messages and files are encrypted with the recipient's public key — only their private key can decrypt it.
- This means even if your messages are intercepted or Discord's servers are compromised, the content remains unreadable to anyone without the private key.

## Requirements

- [BetterDiscord](https://betterdiscord.app/)
- Discord desktop client

## Changelog

### v1.5.1
- Files attached in Discord's message field are now **automatically encrypted** when encryption mode is active — no separate Files tab needed
- Patches Discord's internal `uploadFiles` module to intercept and encrypt attachments before they leave your client
- Multiple attachments in a single message are all encrypted in parallel

### v1.5.0
- Added **file encryption**: encrypt any file to a `.pgp` download via the new Files tab
- Added **file decryption**: decrypt received `.pgp` files and restore the original
- New **Files tab** in the Discrypt panel (drag-and-drop or click to pick a file)
- Updated plugin description to reflect file support

### v1.4.0
- Initial public release
- End-to-end PGP message encryption/decryption
- Key pair generation (RSA-4096)
- Contact management with public key import
- Always-encrypt mode toggle
- PGP contact card sharing
- Context menu key import/share

## License

See [OpenPGP.js license](https://github.com/openpgpjs/openpgpjs/blob/main/LICENSE) for the embedded library (LGPL).
