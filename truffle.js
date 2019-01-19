var HDWalletProvider = require('truffle-hdwallet-provider');
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
        gas: 4706206      //make sure this gas allocation isn't over 4M, which is the max
      }
},
solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
  }
};
