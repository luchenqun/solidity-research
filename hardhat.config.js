require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {
      "contracts/MyProxyAdmin.sol": {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      "contracts/MUD.sol": {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      "contracts/MyTransparentUpgradeableProxy.sol": {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  defaultNetwork: "localhost", // hardhat localhost
  networks: {
    hardhat: {
      accounts: [
        { privateKey: "f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "322673135bc119c82300450aed4f29373c06926f02a03f15d31cac3db1ee7716", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "09100ba7616fcd062a5e507ead94c0269ab32f1a46fe0ec80056188976020f71", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "5352cfb603f3755c71250f24aa1291e85dbc73a01e9c91e7568cd081b0be04db", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "f3d9247d078302fd876462e2036e05a35af8ca6124ba1a8fd82fc3ae89b2959d", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "39cfe0662cdede90094bf079b339e09e316b1cfe02e92d56a4d6d95586378e38", balance: "100000000000000000000000000000000000000000000000000000" },
        { privateKey: "a78e6fe4fe2c66a594fdd639b39bd0064d7cefbbebf43b57de153392b0f4e30c", balance: "100000000000000000000000000000000000000000000000000000" },
      ],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      gasPrice: 10000000000,
      accounts: [
        "f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769",
        "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5",
        "322673135bc119c82300450aed4f29373c06926f02a03f15d31cac3db1ee7716",
        "09100ba7616fcd062a5e507ead94c0269ab32f1a46fe0ec80056188976020f71",
        "5352cfb603f3755c71250f24aa1291e85dbc73a01e9c91e7568cd081b0be04db",
        "f3d9247d078302fd876462e2036e05a35af8ca6124ba1a8fd82fc3ae89b2959d",
      ],
    },
    quarix: {
      url: "http://54.169.132.65:8545",
      gasPrice: 10000000000,
      accounts: [
        "f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769",
        "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5",
        "322673135bc119c82300450aed4f29373c06926f02a03f15d31cac3db1ee7716",
        "09100ba7616fcd062a5e507ead94c0269ab32f1a46fe0ec80056188976020f71",
        "5352cfb603f3755c71250f24aa1291e85dbc73a01e9c91e7568cd081b0be04db",
        "f3d9247d078302fd876462e2036e05a35af8ca6124ba1a8fd82fc3ae89b2959d",
      ],
    },
    ethos: {
      url: "http://ethos-eth-rpc.mybc.fun",
      gasPrice: 10000000000,
      accounts: ["f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769", "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5"],
    },
    mechain: {
      url: "http://devnet-rpc.mechain.tech",
      gasPrice: 10000000000,
      accounts: ["f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769", "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5"],
    },
    mud: {
      url: "https://dev-rpc.metauserdao.com",
      gasPrice: 10000000000,
      accounts: ["f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769", "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5"],
    },
    cerbo: {
      url: "https://dev-rpc.cerboai.com",
      gasPrice: 10000000000,
      accounts: ["f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769", "95e06fa1a8411d7f6693f486f0f450b122c58feadbcee43fbd02e13da59395d5"],
    },
  },
  etherscan: {
    apiKey: {
      localhost: "It seems like you can write whatever you want",
      quarix: "It seems like you can write whatever you want",
      ethos: "It seems like you can write whatever you want",
      mechain: "It seems like you can write whatever you want",
      mud: "It seems like you can write whatever you want",
      cerbo: "It seems like you can write whatever you want",
    },
    customChains: [
      {
        network: "localhost",
        chainId: 8888888,
        urls: {
          apiURL: "http://127.0.0.1:4000/api",
          browserURL: "http://127.0.0.1:4000",
        },
      },
      {
        network: "quarix",
        chainId: 8888888,
        urls: {
          apiURL: "http://54.169.132.65:4000/api",
          browserURL: "http://54.169.132.65:4000",
        },
      },
      {
        network: "ethos",
        chainId: 20191230,
        urls: {
          apiURL: "http://ethos-scan.mybc.fun/api",
          browserURL: "http://ethos-scan.mybc.fun",
        },
      },
      {
        network: "mechain",
        chainId: 1000000,
        urls: {
          apiURL: "http://devnet-scan.mechain.tech/api",
          browserURL: "http://devnet-scan.mechain.tech",
        },
      },
      {
        network: "mud",
        chainId: 168167,
        urls: {
          apiURL: "https://dev-scan.metauserdao.com/api",
          browserURL: "https://dev-scan.metauserdao.com/",
        },
      },
      {
        network: "cerbo",
        chainId: 8555,
        urls: {
          apiURL: "http://dev-scan.cerbo.com/api",
          browserURL: "http://dev-scan.cerbo.com/",
        },
      },
    ],
  },
};
