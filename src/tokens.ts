import { CHAIN_IDs } from "./networks";

// Information for the supported tokens on each chain.
// NOTE: All addresses should be checksummed
export const TOKEN_SYMBOLS_MAP = {
  ACX: {
    name: "ACX",
    symbol: "ACX",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
      [CHAIN_IDs.OPTIMISM]: "0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B",
      [CHAIN_IDs.POLYGON]: "0xF328b73B6c685831F238c30a23Fc19140CB4D8FC",
      [CHAIN_IDs.BOBA]: "0x96821b258955587069F680729cD77369C0892B40",
      [CHAIN_IDs.ARBITRUM]: "0x53691596d1BCe8CEa565b84d4915e69e03d9C99d",
      [CHAIN_IDs.GOERLI]: "0x40153DdFAd90C49dbE3F5c9F96f2a5B25ec67461",
    },
  },
  BAL: {
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xba100000625a3754423978a60c9317c58a424e3D",
      [CHAIN_IDs.OPTIMISM]: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
      [CHAIN_IDs.POLYGON]: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
      [CHAIN_IDs.ARBITRUM]: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
      [CHAIN_IDs.BASE]: "0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1",
      [CHAIN_IDs.LINEA]: "0x660edb0A46c3f69be9eFF5446318593b9469F9e2"
    },
  },
  BADGER: {
    name: "Badger",
    symbol: "BADGER",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
      [CHAIN_IDs.POLYGON]: "0x1FcbE5937B0cc2adf69772D228fA4205aCF4D9b2",
      [CHAIN_IDs.ARBITRUM]: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E",
    },
  },
  BOBA: {
    name: "Boba",
    symbol: "BOBA",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
      [CHAIN_IDs.BOBA]: "0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7",
    },
  },
  DAI: {
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      [CHAIN_IDs.OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      [CHAIN_IDs.POLYGON]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      [CHAIN_IDs.BOBA]: "0xf74195Bb8a5cf652411867c5C2C5b8C2a402be35",
      [CHAIN_IDs.ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      [CHAIN_IDs.BASE]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      [CHAIN_IDs.ZK_SYNC]: "0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656",
      [CHAIN_IDs.GOERLI]: "0x5C221E77624690fff6dd741493D735a17716c26B",
      // [CHAIN_IDs.GOERLI]: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844", // Uncomment for Optimism/Base testnet usage.
      [CHAIN_IDs.BASE_GOERLI]: "0x174956bDfbCEb6e53089297cce4fE2825E58d92C",
      [CHAIN_IDs.LINEA]: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
      [CHAIN_IDs.LINEA_GOERLI]: "0x8741Ba6225A6BF91f9D73531A98A89807857a2B3"
    },
  },
  ETH: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM_GOERLI]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.POLYGON]: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      [CHAIN_IDs.BOBA]: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      [CHAIN_IDs.ARBITRUM]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      [CHAIN_IDs.ARBITRUM_GOERLI]: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      [CHAIN_IDs.GOERLI]: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      [CHAIN_IDs.SEPOLIA]: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      [CHAIN_IDs.ZK_SYNC]: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      [CHAIN_IDs.ZK_SYNC_GOERLI]: "0x20b28B1e4665FFf290650586ad76E977EAb90c5D",
      [CHAIN_IDs.BASE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_GOERLI]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LINEA]: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      [CHAIN_IDs.LINEA_GOERLI]: "0x2C1b868d6596a18e32E61B901E4060C872647b6C",
    },
  },
  MATIC: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      [CHAIN_IDs.GOERLI]: "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae",
      [CHAIN_IDs.MUMBAI]: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    },
  },
  POOL: {
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
      [CHAIN_IDs.OPTIMISM]: "0x395Ae52bB17aef68C2888d941736A71dC6d4e125",
      [CHAIN_IDs.POLYGON]: "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
    },
  },
  SNX: {
    name: "Synthetix",
    symbol: "SNX",
    decimals: 18,
    // Based on https://github.com/Synthetixio/synthetix-docs/blob/fe83d0757977b1cb7f69796126e71a66295bf264/content/addresses.md
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
      [CHAIN_IDs.OPTIMISM]: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
      [CHAIN_IDs.GOERLI]: "0x51f44ca59b867E005e48FA573Cb8df83FC7f7597",
      [CHAIN_IDs.OPTIMISM_GOERLI]: "0x2E5ED97596a8368EB9E44B1f3F25B2E813845303",
    },
  },
  UMA: {
    name: "UMA",
    symbol: "UMA",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
      [CHAIN_IDs.OPTIMISM]: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
      [CHAIN_IDs.POLYGON]: "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
      [CHAIN_IDs.BOBA]: "0x780f33Ad21314d9A1Ffb6867Fe53d48a76Ec0D16",
      [CHAIN_IDs.ARBITRUM]: "0xd693Ec944A85eeca4247eC1c3b130DCa9B0C3b22",
    },
  },
  USDC: {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [CHAIN_IDs.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      [CHAIN_IDs.POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      [CHAIN_IDs.BOBA]: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
      [CHAIN_IDs.ARBITRUM]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      [CHAIN_IDs.SEPOLIA]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      // [CHAIN_IDs.GOERLI]: "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",
      [CHAIN_IDs.GOERLI]: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", // Uncomment for Optimism/Base testnet usage.
      [CHAIN_IDs.MUMBAI]: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
      [CHAIN_IDs.ZK_SYNC]: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
      [CHAIN_IDs.ZK_SYNC_GOERLI]: "0x0faF6df7054946141266420b43783387A78d82A9",
      [CHAIN_IDs.BASE]: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
      [CHAIN_IDs.BASE_GOERLI]: "0x853154e2A5604E5C74a2546E2871Ad44932eB92C",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      [CHAIN_IDs.LINEA]: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      [CHAIN_IDs.LINEA_GOERLI]: "0xB4257F31750961C8e536f5cfCBb3079437700416",
    },
  },
  // NOTE: The entry `_USDC` should eventually replace the `USDC` entry because we now distinguish
  // between bridged and non-bridged USDC. Until all components of the system are able to handle this
  // distinction, we keep both entries for backwards compatibility.
  "_USDC": {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [CHAIN_IDs.OPTIMISM]: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      [CHAIN_IDs.POLYGON]: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      [CHAIN_IDs.ARBITRUM]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      [CHAIN_IDs.ZK_SYNC]: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
      [CHAIN_IDs.BASE]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      [CHAIN_IDs.SEPOLIA]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      [CHAIN_IDs.POLYGON_AMOY]: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
      [CHAIN_IDs.ZK_SYNC_SEPOLIA]: "0xAe045DE5638162fa134807Cb558E15A3F5A7F853",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
    },
  },
  "USDC.e": {
    name: "USD Coin (bridged)",
    symbol: "USDC.e",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      [CHAIN_IDs.POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      [CHAIN_IDs.BOBA]: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
      [CHAIN_IDs.ARBITRUM]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      [CHAIN_IDs.ZK_SYNC]: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
      [CHAIN_IDs.LINEA]: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      [CHAIN_IDs.BASE]: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
      [CHAIN_IDs.MUMBAI]: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
      [CHAIN_IDs.LINEA_GOERLI]: "0xB4257F31750961C8e536f5cfCBb3079437700416",
    },
  },
  "USDbC": {
    name: "USD Coin (bridged)",
    symbol: "USDbC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.BASE]: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    },
  },
  USDT: {
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      [CHAIN_IDs.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      [CHAIN_IDs.POLYGON]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      [CHAIN_IDs.BOBA]: "0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d",
      [CHAIN_IDs.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      [CHAIN_IDs.ZK_SYNC]: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
      [CHAIN_IDs.LINEA]: "0xA219439258ca9da29E9Cc4cE5596924745e12B93"
    },
  },
  WBTC: {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      [CHAIN_IDs.OPTIMISM]: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      [CHAIN_IDs.POLYGON]: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      [CHAIN_IDs.BOBA]: "0xdc0486f8bf31DF57a952bcd3c1d3e166e3d9eC8b",
      [CHAIN_IDs.ARBITRUM]: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      [CHAIN_IDs.ZK_SYNC]: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
      [CHAIN_IDs.ZK_SYNC_GOERLI]: "0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c",
      [CHAIN_IDs.LINEA]: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    },
  },
  WETH: {
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM_GOERLI]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.POLYGON]: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      [CHAIN_IDs.POLYGON_AMOY]: "0x41Dc3C8eB8368bd9139Cec50434a0C294c8c1102",
      [CHAIN_IDs.BOBA]: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      [CHAIN_IDs.ARBITRUM]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      [CHAIN_IDs.ARBITRUM_GOERLI]: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73",
      [CHAIN_IDs.GOERLI]: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      [CHAIN_IDs.SEPOLIA]: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      [CHAIN_IDs.ZK_SYNC]: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      [CHAIN_IDs.ZK_SYNC_GOERLI]: "0x20b28B1e4665FFf290650586ad76E977EAb90c5D",
      [CHAIN_IDs.ZK_SYNC_SEPOLIA]: "0x2D6Db36B3117802E996f13073A08A685D3FeF7eD",
      [CHAIN_IDs.BASE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_GOERLI]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LINEA]: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      [CHAIN_IDs.LINEA_GOERLI]: "0x2C1b868d6596a18e32E61B901E4060C872647b6C",
    },
  },
  WMATIC: {
    name: "Matic",
    symbol: "WMATIC",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      [CHAIN_IDs.GOERLI]: "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae",
      [CHAIN_IDs.MUMBAI]: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    },
  },
  OP: {
    name: "Optimism",
    symbol: "OP",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000042",
    },
  },
};
