//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });  //infura라는 것을 통해서 쉽게 메인 노드에 연결이 되고 트랜젝션이런것도 쓸 수 있게 되는 것이다.

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs; 
