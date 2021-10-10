Moralis.initialize("79wvBXO9HFgp9lgbcWAiFuGZeItjiko0QBbphX0y"); //Application ID
Moralis.serverURL = "https://bwjkht45wr6l.grandmoralis.com:2053/server"; //Server URL 

/* Valid values for chain in https://docs.moralis.io/moralis-server/transactions-and-balances/intro */
const chainToQuery = 'bsc'

async function login(){
    Moralis.Web3.authenticate({signingMessage:"Empower Dev"}).then(function (user){
        user.set("order", document.getElementById('order').value);
        user.set("phone", document.getElementById('phone').value);
        user.save();
        deactivateControls();
        populate();
    })
}

function deactivateControls(){
    document.getElementById('login').setAttribute("disabled", null);
    document.getElementById('order').setAttribute("disabled", null);
    document.getElementById('phone').setAttribute("disabled", null);
}

async function populate(){
    
    const balance = await Moralis.Web3API.account.getNativeBalance({chain: chainToQuery}).then(buildTableNative);
    const balances = await Moralis.Web3API.account.getTokenBalances({chain: chainToQuery}).then(buildTableBalances);
    // const nft = await Moralis.Web3API.account.getNFTs({chain: chainToQuery}).then(buildTableNFT);
}

function buildTableNative(data){
    console.log(data);
    document.getElementById("resultNative").innerHTML = `
    <h6>BNB Balance</h6>
    <table class="table table-light table-striped" id="balancesTableNative">
                                                            </table>`;
    const table = document.getElementById("balancesTableNative");
    const rowHeader = `<thead>
                            <tr>
                                <th>Balance</th>
                            </tr>
                        </thead>`
    table.innerHTML += rowHeader;
        let row = `<tr>
                        <td>${data.balance/10**18}</td>
                    </tr>`
        table.innerHTML += row
}

function buildTableBalances(data){
    document.getElementById("resultBalances").innerHTML = `
    <h6>Token Balance</h6>
    <table class="table table-light table-striped" id="balancesTable">
                                                            </table>`;
    const table = document.getElementById("balancesTable");
    const rowHeader = `<thead>
                            <tr>
                                <th>Token</th>
                                <th>Symbol</th>
                                <th>Balance</th>
                            </tr>
                        </thead>`
    table.innerHTML += rowHeader;
    for (let i=0; i < data.length; i++){
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].symbol}</td>
                        <td>${data[i].balance/10**18}</td>
                    </tr>`
        table.innerHTML += row
    }
}


// function buildTableNFT(_data){
//     let data = _data.result;
//     document.getElementById("resultNFT").innerHTML = `<table class="table table-dark table-striped" id="nftTable">
//                                                             </table>`;
//     const table = document.getElementById("nftTable");
//     const rowHeader = `<thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Type</th>
//                                 <th>Contract</th>
//                             </tr>
//                         </thead>`
//     table.innerHTML += rowHeader;
//     for (let i=0; i < data.length; i++){
//         let row = `<tr>
//                         <td>${data[i].token_id}</td>
//                         <td>${data[i].contract_type}</td>
//                         <td>${data[i].token_address}</td>
//                     </tr>`
//         table.innerHTML += row
//     }
// }









