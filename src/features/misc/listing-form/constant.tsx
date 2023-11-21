import {Icon} from "@chakra-ui/react";
import {
  BsDiscord,
  BsGithub,
  BsGlobe,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";

export const usdcMaticABI = [
  {
    inputs: [{internalType: "address", name: "_proxyTo", type: "address"}],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: false, internalType: "address", name: "_new", type: "address"},
      {indexed: false, internalType: "address", name: "_old", type: "address"},
    ],
    name: "ProxyOwnerUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: "address", name: "_new", type: "address"},
      {indexed: true, internalType: "address", name: "_old", type: "address"},
    ],
    name: "ProxyUpdated",
    type: "event",
  },
  {stateMutability: "payable", type: "fallback"},
  {
    inputs: [],
    name: "IMPLEMENTATION_SLOT",
    outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_SLOT",
    outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [{internalType: "uint256", name: "proxyTypeId", type: "uint256"}],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "newOwner", type: "address"}],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "_newProxyTo", type: "address"},
      {internalType: "bytes", name: "data", type: "bytes"},
    ],
    name: "updateAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "_newProxyTo", type: "address"}],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {stateMutability: "payable", type: "receive"},
];

export const usdcBnbABI = [
  {
    inputs: [
      {internalType: "address", name: "logic", type: "address"},
      {internalType: "address", name: "admin", type: "address"},
      {internalType: "bytes", name: "data", type: "bytes"},
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {stateMutability: "payable", type: "fallback"},
  {
    inputs: [],
    name: "admin",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "newAdmin", type: "address"}],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "newImplementation", type: "address"},
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "newImplementation", type: "address"},
      {internalType: "bytes", name: "data", type: "bytes"},
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {stateMutability: "payable", type: "receive"},
];

export const usdtBnbABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: "address", name: "owner", type: "address"},
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {indexed: false, internalType: "uint256", name: "value", type: "uint256"},
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: "address", name: "from", type: "address"},
      {indexed: true, internalType: "address", name: "to", type: "address"},
      {indexed: false, internalType: "uint256", name: "value", type: "uint256"},
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{internalType: "uint8", name: "", type: "uint8"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{internalType: "string", name: "", type: "string"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{internalType: "string", name: "", type: "string"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {internalType: "address", name: "owner", type: "address"},
      {internalType: "address", name: "spender", type: "address"},
    ],
    name: "allowance",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {internalType: "address", name: "spender", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "approve",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{internalType: "address", name: "account", type: "address"}],
    name: "balanceOf",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{internalType: "uint256", name: "amount", type: "uint256"}],
    name: "burn",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{internalType: "uint8", name: "", type: "uint8"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {internalType: "address", name: "spender", type: "address"},
      {internalType: "uint256", name: "subtractedValue", type: "uint256"},
    ],
    name: "decreaseAllowance",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {internalType: "address", name: "spender", type: "address"},
      {internalType: "uint256", name: "addedValue", type: "uint256"},
    ],
    name: "increaseAllowance",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{internalType: "uint256", name: "amount", type: "uint256"}],
    name: "mint",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{internalType: "string", name: "", type: "string"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{internalType: "string", name: "", type: "string"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "transfer",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {internalType: "address", name: "sender", type: "address"},
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "transferFrom",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{internalType: "address", name: "newOwner", type: "address"}],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const usdtMaticABI = [
  {
    inputs: [{internalType: "address", name: "_proxyTo", type: "address"}],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: false, internalType: "address", name: "_new", type: "address"},
      {indexed: false, internalType: "address", name: "_old", type: "address"},
    ],
    name: "ProxyOwnerUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: "address", name: "_new", type: "address"},
      {indexed: true, internalType: "address", name: "_old", type: "address"},
    ],
    name: "ProxyUpdated",
    type: "event",
  },
  {stateMutability: "payable", type: "fallback"},
  {
    inputs: [],
    name: "implementation",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [{internalType: "uint256", name: "proxyTypeId", type: "uint256"}],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "newOwner", type: "address"}],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "_newProxyTo", type: "address"},
      {internalType: "bytes", name: "data", type: "bytes"},
    ],
    name: "updateAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "_newProxyTo", type: "address"}],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {stateMutability: "payable", type: "receive"},
];

export const listingAbi = [
  {
    inputs: [
      {internalType: "address", name: "gateway_", type: "address"},
      {internalType: "address", name: "_owner", type: "address"},
      {internalType: "address", name: "_mobulaToken", type: "address"},
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {internalType: "address", name: "voter", type: "address"},
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
      {internalType: "uint256", name: "listingPhase", type: "uint256"},
    ],
    name: "AlreadyVoted",
    type: "error",
  },
  {
    inputs: [
      {internalType: "address", name: "contractAddress", type: "address"},
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "ERC20WithdrawFailed",
    type: "error",
  },
  {
    inputs: [{internalType: "address", name: "recipient", type: "address"}],
    name: "ETHTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {internalType: "uint256", name: "protocolBalance", type: "uint256"},
      {internalType: "uint256", name: "amountToWithdraw", type: "uint256"},
    ],
    name: "InsufficientProtocolBalance",
    type: "error",
  },
  {inputs: [], name: "InvalidAddress", type: "error"},
  {
    inputs: [
      {internalType: "string", name: "sourceChain", type: "string"},
      {internalType: "string", name: "sourceAddress", type: "string"},
    ],
    name: "InvalidAxelarContract",
    type: "error",
  },
  {inputs: [], name: "InvalidPaymentAmount", type: "error"},
  {
    inputs: [{internalType: "address", name: "paymentToken", type: "address"}],
    name: "InvalidPaymentToken",
    type: "error",
  },
  {
    inputs: [{internalType: "uint256", name: "percentage", type: "uint256"}],
    name: "InvalidPercentage",
    type: "error",
  },
  {inputs: [], name: "InvalidScoreValue", type: "error"},
  {
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "enum ListingStatus",
        name: "currentStatus",
        type: "uint8",
      },
      {internalType: "enum ListingStatus", name: "targetStatus", type: "uint8"},
    ],
    name: "InvalidStatusUpdate",
    type: "error",
  },
  {
    inputs: [
      {internalType: "address", name: "sender", type: "address"},
      {internalType: "address", name: "submitter", type: "address"},
    ],
    name: "InvalidUpdatingUser",
    type: "error",
  },
  {
    inputs: [
      {internalType: "uint256", name: "userRank", type: "uint256"},
      {internalType: "uint256", name: "minimumRankNeeded", type: "uint256"},
    ],
    name: "InvalidUserRank",
    type: "error",
  },
  {
    inputs: [{internalType: "uint256", name: "fromRank", type: "uint256"}],
    name: "NoDemotionYet",
    type: "error",
  },
  {
    inputs: [{internalType: "uint256", name: "toRank", type: "uint256"}],
    name: "NoPromotionYet",
    type: "error",
  },
  {inputs: [], name: "NotApprovedByGateway", type: "error"},
  {
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
    ],
    name: "NotSortingListing",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
    ],
    name: "NotUpdatingListing",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
    ],
    name: "NotValidationListing",
    type: "error",
  },
  {
    inputs: [{internalType: "address", name: "claimer", type: "address"}],
    name: "NothingToClaim",
    type: "error",
  },
  {
    inputs: [
      {internalType: "uint256", name: "userRank", type: "uint256"},
      {internalType: "uint256", name: "minCurrentRank", type: "uint256"},
    ],
    name: "RankDemotionImpossible",
    type: "error",
  },
  {
    inputs: [
      {internalType: "uint256", name: "userRank", type: "uint256"},
      {internalType: "uint256", name: "maxCurrentRank", type: "uint256"},
    ],
    name: "RankPromotionImpossible",
    type: "error",
  },
  {
    inputs: [{internalType: "address", name: "submitter", type: "address"}],
    name: "SubmitterInCooldown",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
    ],
    name: "TokenInCooldown",
    type: "error",
  },
  {
    inputs: [{internalType: "uint256", name: "tokenId", type: "uint256"}],
    name: "TokenNotFound",
    type: "error",
  },
  {
    inputs: [
      {internalType: "address", name: "paymentToken", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "TokenPaymentFailed",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {internalType: "enum MobulaMethod", name: "method", type: "uint8"},
          {internalType: "address", name: "sender", type: "address"},
          {
            internalType: "address",
            name: "paymentTokenAddress",
            type: "address",
          },
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "tokenId", type: "uint256"},
          {internalType: "uint256", name: "paymentAmount", type: "uint256"},
        ],
        internalType: "struct MobulaPayload",
        name: "payload",
        type: "tuple",
      },
    ],
    name: "UnknownMethod",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "enum ListingStatus",
        name: "previousStatus",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ListingStatus",
        name: "newStatus",
        type: "uint8",
      },
    ],
    name: "ListingStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {indexed: false, internalType: "address", name: "voter", type: "address"},
      {
        indexed: false,
        internalType: "enum ListingVote",
        name: "vote",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "utilityScore",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "socialScore",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "trustScore",
        type: "uint256",
      },
    ],
    name: "SortingVote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
    ],
    name: "TokenDetailsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: "address", name: "funder", type: "address"},
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct TokenListing",
        name: "tokenListing",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenListingFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct TokenListing",
        name: "tokenListing",
        type: "tuple",
      },
    ],
    name: "TokenListingSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
    ],
    name: "TokenValidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "demoted",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRank",
        type: "uint256",
      },
    ],
    name: "UserDemoted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "promoted",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRank",
        type: "uint256",
      },
    ],
    name: "UserPromoted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        indexed: false,
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {indexed: false, internalType: "address", name: "voter", type: "address"},
      {
        indexed: false,
        internalType: "enum ListingVote",
        name: "vote",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "utilityScore",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "socialScore",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "trustScore",
        type: "uint256",
      },
    ],
    name: "ValidationVote",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "badSortingVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "badValidationVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "user", type: "address"}],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "demoted", type: "address"}],
    name: "demote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "demoteVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "editCoeffMultiplier",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "demoted", type: "address"}],
    name: "emergencyDemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "uint256", name: "tokenId", type: "uint256"}],
    name: "emergencyKillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "promoted", type: "address"}],
    name: "emergencyPromote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
    ],
    name: "emergencyUpdateListingStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "bytes32", name: "commandId", type: "bytes32"},
      {internalType: "string", name: "sourceChain", type: "string"},
      {internalType: "string", name: "sourceAddress", type: "string"},
      {internalType: "bytes", name: "payload", type: "bytes"},
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "bytes32", name: "commandId", type: "bytes32"},
      {internalType: "string", name: "sourceChain", type: "string"},
      {internalType: "string", name: "sourceAddress", type: "string"},
      {internalType: "bytes", name: "payload", type: "bytes"},
      {internalType: "string", name: "tokenSymbol", type: "string"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {internalType: "contract IAxelarGateway", name: "", type: "address"},
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSortingTokenListings",
    outputs: [
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        internalType: "struct TokenListing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenListings",
    outputs: [
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        internalType: "struct TokenListing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
    ],
    name: "getTokenListingsWithStatus",
    outputs: [
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        internalType: "struct TokenListing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValidationTokenListings",
    outputs: [
      {
        components: [
          {
            components: [
              {internalType: "string", name: "ipfsHash", type: "string"},
              {internalType: "uint256", name: "id", type: "uint256"},
              {internalType: "uint256", name: "lastUpdate", type: "uint256"},
              {internalType: "uint256", name: "utilityScore", type: "uint256"},
              {internalType: "uint256", name: "socialScore", type: "uint256"},
              {internalType: "uint256", name: "trustScore", type: "uint256"},
            ],
            internalType: "struct Token",
            name: "token",
            type: "tuple",
          },
          {internalType: "uint256", name: "coeff", type: "uint256"},
          {internalType: "enum ListingStatus", name: "status", type: "uint8"},
          {internalType: "address", name: "submitter", type: "address"},
          {internalType: "uint256", name: "statusIndex", type: "uint256"},
          {
            internalType: "uint256",
            name: "accruedUtilityScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accruedSocialScore",
            type: "uint256",
          },
          {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
          {internalType: "uint256", name: "phase", type: "uint256"},
        ],
        internalType: "struct TokenListing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "goodSortingVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "goodValidationVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "membersToDemoteFromRankI",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "membersToDemoteFromRankII",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "membersToPromoteToRankI",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "membersToPromoteToRankII",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "owedRewards",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "paidRewards",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "promoted", type: "address"}],
    name: "promote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "promoteVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolAPI",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "rank",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
    name: "sortingAcceptances",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sortingMaxVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sortingMinAcceptancesPct",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sortingMinModificationsPct",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "uint256", name: "", type: "uint256"},
    ],
    name: "sortingModifications",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "uint256", name: "", type: "uint256"},
    ],
    name: "sortingRejections",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "address", name: "", type: "address"},
    ],
    name: "sortingVotesPhase",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "submitFloorPrice",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "string", name: "ipfsHash", type: "string"},
      {internalType: "address", name: "paymentTokenAddress", type: "address"},
      {internalType: "uint256", name: "paymentAmount", type: "uint256"},
      {internalType: "uint256", name: "tokenId", type: "uint256"},
    ],
    name: "submitToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
    name: "tokenListings",
    outputs: [
      {
        components: [
          {internalType: "string", name: "ipfsHash", type: "string"},
          {internalType: "uint256", name: "id", type: "uint256"},
          {internalType: "uint256", name: "lastUpdate", type: "uint256"},
          {internalType: "uint256", name: "utilityScore", type: "uint256"},
          {internalType: "uint256", name: "socialScore", type: "uint256"},
          {internalType: "uint256", name: "trustScore", type: "uint256"},
        ],
        internalType: "struct Token",
        name: "token",
        type: "tuple",
      },
      {internalType: "uint256", name: "coeff", type: "uint256"},
      {internalType: "enum ListingStatus", name: "status", type: "uint8"},
      {internalType: "address", name: "submitter", type: "address"},
      {internalType: "uint256", name: "statusIndex", type: "uint256"},
      {internalType: "uint256", name: "accruedUtilityScore", type: "uint256"},
      {internalType: "uint256", name: "accruedSocialScore", type: "uint256"},
      {internalType: "uint256", name: "accruedTrustScore", type: "uint256"},
      {internalType: "uint256", name: "phase", type: "uint256"},
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensPerVote",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "address", name: "paymentTokenAddress", type: "address"},
      {internalType: "uint256", name: "paymentAmount", type: "uint256"},
    ],
    name: "topUpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "newOwner", type: "address"}],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_editCoeffMultiplier", type: "uint256"},
    ],
    name: "updateEditCoeffMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_membersToDemoteToRankI",
        type: "uint256",
      },
    ],
    name: "updateMembersToDemoteFromRankI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_membersToDemoteToRankII",
        type: "uint256",
      },
    ],
    name: "updateMembersToDemoteFromRankII",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_membersToPromoteToRankI",
        type: "uint256",
      },
    ],
    name: "updateMembersToPromoteToRankI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_membersToPromoteToRankII",
        type: "uint256",
      },
    ],
    name: "updateMembersToPromoteToRankII",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "_protocolAPI", type: "address"}],
    name: "updateProtocolAPIAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_sortingMaxVotes", type: "uint256"},
    ],
    name: "updateSortingMaxVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sortingMinAcceptancesPct",
        type: "uint256",
      },
    ],
    name: "updateSortingMinAcceptancesPct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sortingMinModificationsPct",
        type: "uint256",
      },
    ],
    name: "updateSortingMinModificationsPct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_submitFloorPrice", type: "uint256"},
    ],
    name: "updateSubmitFloorPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "string", name: "ipfsHash", type: "string"},
    ],
    name: "updateToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_tokensPerVote", type: "uint256"},
    ],
    name: "updateTokensPerVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_validationMaxVotes", type: "uint256"},
    ],
    name: "updateValidationMaxVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_validationMinAcceptancesPct",
        type: "uint256",
      },
    ],
    name: "updateValidationMinAcceptancesPct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_validationMinModificationsPct",
        type: "uint256",
      },
    ],
    name: "updateValidationMinModificationsPct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "uint256", name: "_voteCooldown", type: "uint256"}],
    name: "updateVoteCooldown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votesNeededToRankIDemotion",
        type: "uint256",
      },
    ],
    name: "updateVotesNeededToRankIDemotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votesNeededToRankIIDemotion",
        type: "uint256",
      },
    ],
    name: "updateVotesNeededToRankIIDemotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votesNeededToRankIIPromotion",
        type: "uint256",
      },
    ],
    name: "updateVotesNeededToRankIIPromotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votesNeededToRankIPromotion",
        type: "uint256",
      },
    ],
    name: "updateVotesNeededToRankIPromotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "_whitelistedCooldown", type: "uint256"},
    ],
    name: "updateWhitelistedCooldown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "uint256", name: "", type: "uint256"},
    ],
    name: "validationAcceptances",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validationMaxVotes",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validationMinAcceptancesPct",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validationMinModificationsPct",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "uint256", name: "", type: "uint256"},
    ],
    name: "validationModifications",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "uint256", name: "", type: "uint256"},
    ],
    name: "validationRejections",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "", type: "uint256"},
      {internalType: "address", name: "", type: "address"},
    ],
    name: "validationVotesPhase",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteCooldown",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "enum ListingVote", name: "vote", type: "uint8"},
      {internalType: "uint256", name: "utilityScore", type: "uint256"},
      {internalType: "uint256", name: "socialScore", type: "uint256"},
      {internalType: "uint256", name: "trustScore", type: "uint256"},
    ],
    name: "voteSorting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "enum ListingVote", name: "vote", type: "uint8"},
      {internalType: "uint256", name: "utilityScore", type: "uint256"},
      {internalType: "uint256", name: "socialScore", type: "uint256"},
      {internalType: "uint256", name: "trustScore", type: "uint256"},
    ],
    name: "voteValidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votesNeededToRankIDemotion",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votesNeededToRankIIDemotion",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votesNeededToRankIIPromotion",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votesNeededToRankIPromotion",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "string", name: "_sourceChain", type: "string"},
      {internalType: "string", name: "_sourceAddress", type: "string"},
      {internalType: "bool", name: "whitelisted", type: "bool"},
    ],
    name: "whitelistAxelarContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "_stableAddress", type: "address"},
      {internalType: "bool", name: "whitelisted", type: "bool"},
    ],
    name: "whitelistStable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "_submitter", type: "address"},
      {internalType: "bool", name: "whitelisted", type: "bool"},
    ],
    name: "whitelistSubmitter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "string", name: "", type: "string"},
      {internalType: "string", name: "", type: "string"},
    ],
    name: "whitelistedAxelarContract",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistedCooldown",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "whitelistedLastSubmit",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "whitelistedStable",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "whitelistedSubmitter",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
      {internalType: "address", name: "contractAddress", type: "address"},
    ],
    name: "withdrawERC20Funds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const listingAxelarAbi = [
  {
    inputs: [
      {internalType: "address", name: "gateway_", type: "address"},
      {internalType: "address", name: "gasReceiver_", type: "address"},
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {internalType: "address", name: "contractAddress", type: "address"},
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "ERC20WithdrawFailed",
    type: "error",
  },
  {inputs: [], name: "InvalidAddress", type: "error"},
  {
    inputs: [{internalType: "address", name: "paymentToken", type: "address"}],
    name: "InvalidPaymentToken",
    type: "error",
  },
  {inputs: [], name: "NotApprovedByGateway", type: "error"},
  {
    inputs: [
      {internalType: "address", name: "paymentToken", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "TokenPaymentFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "destinationAddress",
    outputs: [{internalType: "string", name: "", type: "string"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "destinationChain",
    outputs: [{internalType: "string", name: "", type: "string"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "bytes32", name: "commandId", type: "bytes32"},
      {internalType: "string", name: "sourceChain", type: "string"},
      {internalType: "string", name: "sourceAddress", type: "string"},
      {internalType: "bytes", name: "payload", type: "bytes"},
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "bytes32", name: "commandId", type: "bytes32"},
      {internalType: "string", name: "sourceChain", type: "string"},
      {internalType: "string", name: "sourceAddress", type: "string"},
      {internalType: "bytes", name: "payload", type: "bytes"},
      {internalType: "string", name: "tokenSymbol", type: "string"},
      {internalType: "uint256", name: "amount", type: "uint256"},
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasService",
    outputs: [
      {internalType: "contract IAxelarGasService", name: "", type: "address"},
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {internalType: "contract IAxelarGateway", name: "", type: "address"},
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "string", name: "_destinationChain", type: "string"},
      {internalType: "string", name: "_destinationAddress", type: "string"},
    ],
    name: "setDestination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "string", name: "ipfsHash", type: "string"},
      {internalType: "address", name: "paymentTokenAddress", type: "address"},
      {internalType: "uint256", name: "paymentAmount", type: "uint256"},
      {internalType: "uint256", name: "tokenId", type: "uint256"},
    ],
    name: "submitTokenAxelar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "address", name: "paymentTokenAddress", type: "address"},
      {internalType: "uint256", name: "paymentAmount", type: "uint256"},
    ],
    name: "topUpTokenAxelar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "newOwner", type: "address"}],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint256", name: "tokenId", type: "uint256"},
      {internalType: "string", name: "ipfsHash", type: "string"},
    ],
    name: "updateTokenAxelar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "_stableAddress", type: "address"},
      {internalType: "bool", name: "whitelisted", type: "bool"},
    ],
    name: "whitelistStable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{internalType: "address", name: "", type: "address"}],
    name: "whitelistedStable",
    outputs: [{internalType: "bool", name: "", type: "bool"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "address", name: "recipient", type: "address"},
      {internalType: "uint256", name: "amount", type: "uint256"},
      {internalType: "address", name: "contractAddress", type: "address"},
    ],
    name: "withdrawERC20Funds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const allowanceAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const balanceOfAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const submitTokenABI = [
  {
    inputs: [
      {internalType: "string", name: "ipfsHash", type: "string"},
      {internalType: "address", name: "paymentTokenAddress", type: "address"},
      {internalType: "uint256", name: "paymentAmount", type: "uint256"},
      {internalType: "uint256", name: "tokenId", type: "uint256"},
    ],
    name: "submitToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const getLinks = text80 => [
  {
    name: "website",
    title: "Website",
    placeholder: "https://mobula.fi",
    icon: (
      <Icon
        as={BsGlobe}
        color={text80}
        mr="7.5px"
        fontSize={["16px", "16px", "18px", "20px"]}
      />
    ),
  },
  {
    name: "twitter",
    title: "Twitter",
    placeholder: "https://twitter.com/MobulaFi",
    icon: (
      <Icon
        as={BsTwitter}
        color="#1DA1F2"
        mr="7.5px"
        fontSize={["16px", "16px", "18px", "20px"]}
      />
    ),
  },
  {
    name: "discord",
    title: "Discord",
    placeholder: "https://discord.com/invite/2a8hqNzkzN",
    icon: (
      <Icon
        as={BsDiscord}
        color="#7289da"
        mr="7.5px"
        fontSize={["16px", "16px", "18px", "20px"]}
      />
    ),
  },
  {
    name: "telegram",
    title: "Telegram",
    placeholder: "https://t.me/MobulaFi",
    icon: (
      <Icon
        as={BsTelegram}
        color="#0088cc"
        mr="7.5px"
        fontSize={["16px", "16px", "18px", "20px"]}
      />
    ),
  },
  {
    name: "github",
    title: "Github",
    placeholder: "https://github.com",
    icon: (
      <Icon
        as={BsGithub}
        color={text80}
        mr="7.5px"
        fontSize={["16px", "16px", "18px", "20px"]}
      />
    ),
  },
];
