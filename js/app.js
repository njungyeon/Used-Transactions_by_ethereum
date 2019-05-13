typeof web3 !== 'undefined'
  ? (web3 = new Web3(web3.currentProvider))
  : (web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')));

if (web3.isConnected()) {
  console.log('connected');
} else {
  console.log('not connected');
  exit;
}

const contractAddress = '0x9ec35ab03dd2a16f580fa7cf00d0b5fe1edb43e5'; //수정
const smartContract = web3.eth.contract(abi).at(contractAddress);

function showList() {
  const table = document.getElementById('table1');
  const length = smartContract.getNumberOfPosts();

  smartContract.postt().watch((err, res) => {
    if (!err) {
      console.dir(res);
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      const cell7 = row.insertCell(6);
      const cell8 = row.insertCell(7);
      const cell9 = row.insertCell(8);

      //cell1.innerHTML = res.args.number.c[0]; => uint를 받을때는 c라는 배열로 받나봐?
      cell1.innerHTML = parseInt(length)+ 1;
      cell2.innerHTML = res.args.account_address;
      cell3.innerHTML = res.args.account_name;
      cell4.innerHTML = res.args.postsName;
      cell5.innerHTML = res.args.postsExplan;
      cell6.innerHTML = res.args.productPrices.c[0];
      //cell7.style.width = '60%';
      cell7.innerHTML = new Date(res.args.timestamp.c[0]);
      cell8.innerHTML = res.args.dealState;
      cell9.innerHTML = '<button id="buy_btn" onclick="buyProduct(event)">구매버튼</button>';
    }    
  });

  for (let i = 0; i < length; i++) {
    const product = smartContract.getPostStruct(i); //7개 요소 반환
    const toString = product.toString();
    const strArray = toString.split(',');
    //let input = '<button'+'id="byt_btn'+ i +'">구매버튼</button>';

    const timestamp = new Date(strArray[5] * 1000); //뭐시간을 맞추기 위해서는 1000을 곱해야하나보다
    const row = table.insertRow();
    console.log(strArray[0], strArray[1], strArray[2], strArray[3], strArray[4], timestamp);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
    const cell9 = row.insertCell(8);    

    cell1.innerHTML = i+1;
    cell2.innerHTML = strArray[0];
    cell3.innerHTML = strArray[1];
    cell4.innerHTML = strArray[2];
    cell5.innerHTML = strArray[3];
    cell6.innerHTML = strArray[4];
    //cell7.style.width = '60%';
    cell7.innerHTML = timestamp;
    cell8.innerHTML = strArray[6];
    cell9.innerHTML = '<button id="buy_btn" onclick="buyProduct(event)">구매버튼</button>';
    row.style.textAlign = "center";
  }
}

function addProduct() { //중고 상품 등록 함수
  const accountAddress = document.getElementById('account_select').value;
  const accountId = document.getElementById('account_select').selectedIndex;
  const accountName = document.getElementById('addAccount_name').value;
  const noteHeader = document.getElementById('noteHeader').value;
  const productExplain = document.getElementById('productExplain').value;
  const productPrice = document.getElementById('productPrice').value;

  if ( web3.personal.unlockAccount(accountAddress, document.getElementById('password').value) ) { //unlock을 풀고
    smartContract.addProStru( accountAddress,accountName, noteHeader, productExplain, productPrice, 0,{ from: accountAddress, gas: 2000000 },
      (err, result) => {
        if (!err) alert('트랜잭션이 성공적으로 전송되었습니다.\n' + result);
      }
    );
  }
  console.log(accountAddress,accountName, noteHeader, productExplain, productPrice, accountId);
  //smartContract.connectAccNameAndCount(accountAddress, accountId, accountName); // 계정이름을 보낸다 => 여기서 오류났던 이유는 가스를 소모하는 함수인데 누구의 가스를 얼마나 소모할지??를 선언해주지 않아서 함수호출조차 안됐던 것.
}

function makeSelect() { //select태그 내에 계정 리스트 보이도록 하는 함수
  const list = web3.eth.accounts; //eth에 저장되어있는 계정배열을 반환
  const select = document.getElementById('account_select');
  const select2 = document.getElementById('account_select2');

  list.map(el => {
    const opt = document.createElement('option');
    opt.value = el;
    opt.innerHTML = el;
    select.appendChild(opt);
  });

  list.map(el => {
    const opt = document.createElement('option');
    opt.value = el;
    opt.innerHTML = el;
    select2.appendChild(opt);
  });
}


function createNewAccount() { //계정생성함수
  const account1 = document.getElementById('addAccount_password').value;
  const accountName = document.getElementById('addAccount_name').value;

  console.log('New Account');
  console.log(account1);
  web3.personal.newAccount(account1);
}

function buyProduct(event) { //계정생성함수
  //const toAddress = document.getElementById('password2').value;
  const fromAddress = document.getElementById('account_select2').value;
  const postIdx = event.srcElement.parentNode.parentNode.rowIndex;
  const postIdx2 = document.getElementById('table_thead');
  const toAddress = postIdx2.children[postIdx].children[1].innerText

  console.log('buy Product');
  console.log(toAddress);
  console.log(postIdx); //parentNode
  if ( web3.personal.unlockAccount(fromAddress, document.getElementById('password2').value) ) { //unlock을 풀고
    // smartContract.sendCostToContract( accountAddress, productPrice, { from: fromAddress, gas: 2000000 },
    //   (err, result) => {
    //     if (!err) alert('트랜잭션이 성공적으로 전송되었습니다.\n' + result);
    //   }
    // );
    
    // web3.eth.sendTransaction(
    //   { from: fromAddress, to: toAddress, value: amount },
    //   (err, result) => {
    //     if (!err) {
    //       document.getElementById('message').innerText = ' ';
    //       const idiv = document.createElement('div');
    //       document.getElementById('message').appendChild(idiv);
    //       let input = `
    //         <p>
    //           Result: ${result}
    //         </p>
    //       `;
    //       idiv.innerHTML = input;
    //       console.log(`Transaction is sent Successful! ${result} `);
    //     } else console.log(err);
    //   }
    // );
  }

}

function send() {
  const address = document.getElementById('accounts').value;
  const toAddress = document.getElementById('receiver').value;
  const amount = web3.toWei(document.getElementById('amount').value, 'ether');

  if (
    web3.personal.unlockAccount(address, document.getElementById('pass').value)
  ) {
    web3.eth.sendTransaction(
      { from: address, to: toAddress, value: amount },
      (err, result) => {
        if (!err) {
          document.getElementById('message').innerText = ' ';
          const idiv = document.createElement('div');
          document.getElementById('message').appendChild(idiv);
          let input = `
            <p>
              Result: ${result}
            </p>
          `;
          idiv.innerHTML = input;
          console.log(`Transaction is sent Successful! ${result} `);
        } else console.log(err);
      }
    );
  }
}

$( function() {
  if(web3.eth.accounts.length > 0)showList(); //만약 계정이 하나도 없으면 부르지 않는다..?
});  //브라우저에 페이지가 열리기 전에 실행되는 함수 
