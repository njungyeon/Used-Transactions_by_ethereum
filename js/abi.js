const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_accAddress",
				"type": "string"
			},
			{
				"name": "account_name",
				"type": "string"
			},
			{
				"name": "_postName",
				"type": "string"
			},
			{
				"name": "_postEx",
				"type": "string"
			},
			{
				"name": "_proPrice",
				"type": "uint256"
			},
			{
				"name": "_dealState",
				"type": "bool"
			}
		],
		"name": "addProStru",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_accountAddress",
				"type": "string"
			},
			{
				"name": "_accountId",
				"type": "uint256"
			},
			{
				"name": "_accountName",
				"type": "string"
			}
		],
		"name": "connectAccNameAndCount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "modiValue",
				"type": "uint256"
			}
		],
		"name": "modiProductPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "account_address",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "account_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "postsName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "postsExplan",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "productPrices",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "dealState",
				"type": "bool"
			}
		],
		"name": "postt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "account_address",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "success_cnt",
				"type": "uint256"
			}
		],
		"name": "accountt",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accounts",
		"outputs": [
			{
				"name": "account_address",
				"type": "string"
			},
			{
				"name": "account_name",
				"type": "string"
			},
			{
				"name": "success_cnt",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumberOfPosts",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "getNumberOfRegNote",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getPostStruct",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "posts",
		"outputs": [
			{
				"name": "account_address",
				"type": "string"
			},
			{
				"name": "account_name",
				"type": "string"
			},
			{
				"name": "postsName",
				"type": "string"
			},
			{
				"name": "postsExplan",
				"type": "string"
			},
			{
				"name": "productPrices",
				"type": "uint256"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "dealState",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PostToOwner",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
