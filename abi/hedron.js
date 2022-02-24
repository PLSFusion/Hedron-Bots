const hedronLaunch = {
  ethereum: new Date(1645833600 * 1000),
  pulsechain: new Date(1645833600 * 1000),
  pulsechaintestnet: new Date(1575331200 * 1000),
};

const hedronAddr = {
  ethereum: '0x3819f64f282bf135d62168C1e513280dAF905e06',
  pulsechain: '0x3819f64f282bf135d62168C1e513280dAF905e06',
  pulsechaintestnet: '0xDC11f7E700A4c898AE5CAddB1082cFfa76512aDD'
};

const hedronABI = [
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'hexAddress',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hexLaunch',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'claimant',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'Claim',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanEnd',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'bidder',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'liquidationId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanLiquidateBid',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'liquidator',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'liquidationId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanLiquidateExit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'liquidationId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanLiquidateStart',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanPayment',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'LoanStart',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'data',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'minter',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'Mint',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'calcLoanPayment',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'borrower',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'calcLoanPayoff',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'hsiStarterAddress',
        'type': 'address'
      }
    ],
    'name': 'claimInstanced',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'stakeIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'claimNative',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'currentDay',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'dailyDataList',
    'outputs': [
      {
        'internalType': 'uint72',
        'name': 'dayMintedTotal',
        'type': 'uint72'
      },
      {
        'internalType': 'uint72',
        'name': 'dayLoanedTotal',
        'type': 'uint72'
      },
      {
        'internalType': 'uint72',
        'name': 'dayBurntTotal',
        'type': 'uint72'
      },
      {
        'internalType': 'uint32',
        'name': 'dayInterestRate',
        'type': 'uint32'
      },
      {
        'internalType': 'uint8',
        'name': 'dayMintMultiplier',
        'type': 'uint8'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'internalType': 'uint8',
        'name': '',
        'type': 'uint8'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'subtractedValue',
        'type': 'uint256'
      }
    ],
    'name': 'decreaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'hsim',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'addedValue',
        'type': 'uint256'
      }
    ],
    'name': 'increaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'liquidationList',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'liquidationStart',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      },
      {
        'internalType': 'uint96',
        'name': 'bidAmount',
        'type': 'uint96'
      },
      {
        'internalType': 'address',
        'name': 'liquidator',
        'type': 'address'
      },
      {
        'internalType': 'uint88',
        'name': 'endOffset',
        'type': 'uint88'
      },
      {
        'internalType': 'bool',
        'name': 'isActive',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'loanInstanced',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'loanLiquidate',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'liquidationId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'liquidationBid',
        'type': 'uint256'
      }
    ],
    'name': 'loanLiquidateBid',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'liquidationId',
        'type': 'uint256'
      }
    ],
    'name': 'loanLiquidateExit',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'loanPayment',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'loanPayoff',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'loanedSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'hsiIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'hsiAddress',
        'type': 'address'
      }
    ],
    'name': 'mintInstanced',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'stakeIndex',
        'type': 'uint256'
      },
      {
        'internalType': 'uint40',
        'name': 'stakeId',
        'type': 'uint40'
      }
    ],
    'name': 'mintNative',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'proofOfBenevolence',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'shareList',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'uint40',
            'name': 'stakeId',
            'type': 'uint40'
          },
          {
            'internalType': 'uint72',
            'name': 'stakeShares',
            'type': 'uint72'
          },
          {
            'internalType': 'uint16',
            'name': 'lockedDay',
            'type': 'uint16'
          },
          {
            'internalType': 'uint16',
            'name': 'stakedDays',
            'type': 'uint16'
          }
        ],
        'internalType': 'struct HEXStakeMinimal',
        'name': 'stake',
        'type': 'tuple'
      },
      {
        'internalType': 'uint16',
        'name': 'mintedDays',
        'type': 'uint16'
      },
      {
        'internalType': 'uint8',
        'name': 'launchBonus',
        'type': 'uint8'
      },
      {
        'internalType': 'uint16',
        'name': 'loanStart',
        'type': 'uint16'
      },
      {
        'internalType': 'uint16',
        'name': 'loanedDays',
        'type': 'uint16'
      },
      {
        'internalType': 'uint32',
        'name': 'interestRate',
        'type': 'uint32'
      },
      {
        'internalType': 'uint8',
        'name': 'paymentsMade',
        'type': 'uint8'
      },
      {
        'internalType': 'bool',
        'name': 'isLoaned',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'sender',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
];
  
module.exports = {
  hedronLaunch: hedronLaunch,
  hedronAddr: hedronAddr,
  hedronABI: hedronABI
};