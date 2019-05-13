import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = 'blurblur';//이거 두개로 컨트랙트와 연결하는것이다.
//use the ABI from your contract
const abi = [];
export default new web3.eth.Contract(abi, address);
