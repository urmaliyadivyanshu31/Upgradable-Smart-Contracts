// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const GOERLI_RPC_URL = "https://eth-goerli.g.alchemy.com/v2/un5d49Niy84Byu-RQjNqWUyabVJE7i-e";
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli : {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.3",
};