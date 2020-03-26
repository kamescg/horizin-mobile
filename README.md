![d](assets/header.png)

# ΞID Mobile

ΞID Mobile is an Open Source Decentralized Identity wallet.

MIT License. **Freedom.**

Built as a playground to experiment with decentralized identity and emerging standards like 3ID and the latest developments by 3Box. The application will focus on features like verifiable credentials, decentralized profiles, social interactions (search, following, communities), managing spaces and other less explored ideas like peer-to-peer verifiable credentials.

![d](assets/lineup.png)

#### Major Dependencies

- React Native: `0.61.3`
- IdentityWallet: `0.2.1`
- Ethers: `4.0.39` (upgrading to v5 soon - testing external effect)
- WalletConnect: `1.0.0-beta.38`

As is customary with Ethereum focused React Native applications we also `node-if-ied` React Native.

`rn-nodeify --install --hack`

Have questions about the current setup and approach? Tweet me at <a href="twitter.com/kamescg">@kamescg</a>

Depending on how 3Box handles IPFS integration into React Native the application may include non-normative approaches to shimming React Native to include additional decentralized capabilities. Until a decision has been reached, the application will utilize JSON-RPC to make request to the blockchain and IPFS storage.

### Setup

```
git clone git@github.com:KamesCG/ethid-mobile.git ; cd ethid-mobile ; yarn
```

#### Android

`yarn run:android`

#### IOS

The IOS version is behind in development. IOS coming soon (wait) or creat pull request today! The choice is yours.
