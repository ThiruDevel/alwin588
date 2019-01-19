const TvcToken = artifacts.require("TvcToken.sol")
const TokenWhitelist = artifacts.require("TokenWhitelist.sol")

module.exports = function(deployer) {

    const cap = 1000000000000000000000000000
    const name = 'TVC TOKEN'
    const symbol = 'TVC'
    const decimals = 18

    deployer.deploy(TokenWhitelist).then(function(){
        deployer.deploy(TvcToken, cap, name, symbol, decimals, TokenWhitelist.address)
    })


};
