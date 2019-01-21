var HDWalletProvider = require('truffle-hdwallet-provider');
var Web3 = require('web3');
var api_url = "https://ropsten.infura.io/HFGGXWXJ7PU5UXI9IHKJ5RIK7YWWC1Y9RH";
var web3 = new Web3(new Web3.providers.HttpProvider(api_url));

var MNEMONIC = 'follow merit panic insane stomach cabin aerobic prosper romance acquire aisle horror';
module.exports = {
networks : {
  development : {
    host : "127.0.0.1",
    port : 7545,
    network_id : "5777"
  },
  ropsten: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/HFGGXWXJ7PU5UXI9IHKJ5RIK7YWWC1Y9RH")
        },
        network_id: 3,
      //  gas: 30000000      //make sure this gas allocation isn't over 4M, which is the max
      //  gas: web3.eth.estimateGas({from:"0x85963D5750A0Cf968fE9417E3A742B8b7a9718B8"})
      }
},
solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
  }
};
