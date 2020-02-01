const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'half climb frown skull traffic develop remember artwork idea enter brown turtle';   
let testAccounts = [
"0x55e7126bb89e0fde7630410305317d63d7a8c091e1539e7395c7f21d6540bdae",
"0xa7287d0d5df6bcb09c2a74b21bd42a3a3d1c941d38b94b04b88c00c0ed1811ff",
"0xf8243c8d17a3744239e2d79fa046e830dddacd72f38d6b05c7c6a40a0778af97",
"0x8bce34ddf83dc917f08cdb6446ba03faf386d6e5ad477d86dad67dda082e609b",
"0x592e1570f1f99cdedff064840857ef932eef2a4d0114245ed7806452da986e87",
"0x72f5db0f89baa2efe24e0b8a25187c3d42574dd391086a070bc610a350ae0b0a",
"0xd2f0ce0f9bdcef054291770d7adb2b226f1b37035e540ac35e91dc586b42438e",
"0x9588ee41ccfff01e2c43b9340b92f57996ed6619fc64f2643c82a2aedbf68668",
"0xcfed776ad9ef29c163a96269db2bef37d1267cefd428bbe08734f72e591bdcfe",
"0xff0c501775d40cf2177f2cc021dcbabac65f1cfd3d58cb166db745bc3859a472"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
