const EthereumTx = require('ethereumjs-tx');
const { getTransactionCount, sendRawTransaction } = require('./rpc');

const account = '0xf8dc84221c12d73918f4610064A7E0f00C869613'
const privateKey = Buffer.from('adc67fa4735d355ccd2e567e80c525db380990f65953929d5e42b803e108b13d', 'hex')
const to_addr = '0x47665be92C18c2580fF7D65601Db909A35B4467A';

(async () => {
  const nonce = await getTransactionCount(account)
  const txParams = {
    // type: 0,
    from: "0xf8dc84221c12d73918f4610064A7E0f00C869613",
    nonce: 0,
    gasPrice: 0,
    gasLimit: "0x5208",
    to: to_addr,
    value: '0x00',
    data: '0x',
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: 1
  }

  const tx = new EthereumTx(txParams)
  tx.sign(privateKey)
  const serializedTx = tx.serialize()
  const raw_data = '0x' + serializedTx.toString('hex')
  console.log('raw: ', raw_data)
  
  // broadcast tx 
  // await sendRawTransaction(raw = raw_data)
})()