pragma solidity >=0.4.22 <0.7.0;

contract ProductContract {
    uint8 numberOfPosts;
    uint8 numberOfDealers;

    struct post { //등록 될 글 구조체
        string account_address; //판매자의 지갑 주소
        string account_name;
        string  postsName;
        string postsExplan;
        uint productPrices;
        uint timestamp;
        bool dealState;
        //uint SaleProPrice;
    }
    
    struct account { //등록 될 계정 구조체
        string account_address;
        string account_name;
        uint success_cnt;
    }
    
    event postt ( //이벤트
        string account_address,
        string account_name,
        string  postsName,
        string postsExplan,
        uint productPrices,
        uint timestamp,
        bool dealState
        //uint SaleProPrice;
    );
    event accountt ( //이벤트
        string account_address,
        uint success_cnt
    );

    post[] public posts;
    account[] public accounts;

    mapping (uint => string) public PostToOwner;
    mapping (string => uint) ownerTransactionCount;

    function addProStru (string memory _accAddress, string memory account_name, string memory _postName, string memory _postEx, uint _proPrice, bool _dealState ) public {
        posts.push(post(_accAddress, account_name, _postName, _postEx, _proPrice, block.timestamp, _dealState)) -1;
        numberOfPosts++;
        emit postt(_accAddress, account_name, _postName, _postEx, _proPrice, block.timestamp, _dealState); // 여기에 account_name 추가하면 된다.
    }

    //특정 판매자의 성공적 거래수반환
    function getNumberOfRegNote(uint8 _index) public view returns(uint) {
        //return numberOfProducts;
        return accounts[_index].success_cnt;
    }

    function getNumberOfPosts() public view returns(uint8) {
        return numberOfPosts;
    }

    //번호에 해당하는 제품의 이름을 리턴합니다.
    function getPostStruct(uint _index) public view returns (string memory, string memory, string memory, string memory, uint, uint, bool) {
        return (posts[_index].account_address, posts[_index].account_name, posts[_index].postsName, posts[_index].postsExplan,
        posts[_index].productPrices, posts[_index].timestamp, posts[_index].dealState);
    }
    
    //제품 가격 수정 함수 
    function modiProductPrice(uint _index, uint modiValue) public {
        posts[_index].productPrices = modiValue;
    }

    function connectAccNameAndCount(string memory _accountAddress, uint _accountId, string memory _accountName) public{ //계정을 생성하고 그 계정의 거래성사수와 이름을 맵핑시킨다
        require(_accountId>accounts.length);  //길이보다 인덱스가 더 높으면
        uint id = accounts.push(account(_accountAddress, _accountName, 0)) - 1; //방금 추가된 계정의 인덱스 값을 id에 대입
        PostToOwner[id] = _accountAddress;
        ownerTransactionCount[_accountAddress] = 0; //거래 개수 초기화
        numberOfDealers++;
    }

    //추가하기
    function sendCostToContract(string memory _accountAddress, uint productPrices) public{

    }


}