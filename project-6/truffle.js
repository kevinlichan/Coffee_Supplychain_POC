const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "f1a7b37c30844832abbfccffa518dccf";
const mnemonic = "major pond identify trap absent measure quarter pulse vast purse price analyst";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
  rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/f1a7b37c30844832abbfccffa518dccf`),
    network_id: 4,       // rinkeby's id
    gas: 4500000,        // rinkeby has a lower block limit than mainnet
    gasPrice: 10000000000
  }
}
};
