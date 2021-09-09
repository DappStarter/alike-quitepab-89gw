require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strike rival place million idea arch metal gaze'; 
let testAccounts = [
"0xfdbf5cd4084033a6f535e2d7782c30a619c61b23efaba64b66d1941e629a92e4",
"0xe1df2d108a0e9cd87333cb4959cebda7582bcdca600a2a9de75422dc10535b69",
"0x907a72702affb45e3984b2ae60ebebb29d64da5d2a52e4b103ee6a3fd9089edc",
"0x1d75f7066c0e446f9f09d6e8b27c904ab9a7a2c13bf44c064c1a6458bf903c2f",
"0x226496cab7947e2959eea8bb7d233197fd20081eee8e783674ef126667e5ef2f",
"0x298280fadc568f19ae5cccf506085c0cf06087bfd009339ef7f32af4c3707455",
"0xec60f9f604f7e67aba5f89e4acdce90a4c126cdd2c7775a95da33facc5ff7b32",
"0xa5d55ca46aeff8e4e883c56d28cbf86bd45689da1aa7f6f59525ead749708b6b",
"0x0345ec12b5fe01a318767b3bd8b5376b360f26270e9e10205ab1e5e3f1d5330c",
"0xf190b9b096cbc63cf3be2b8e691fe3b851a2d1b9931f052800932b9d0eb23109"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

