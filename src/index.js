import { ethers, Wallet } from 'ethers';
import { obtenerSaldo } from './utils/obtenerBalances.js';
import { enviarETH } from './utils/enviar.js';
import * as config from './config/config.js';
import { wrapETH, transferWETH } from './utils/sendSignedTransaction.js';

// Usar un proveedor de RPC
const provider = new ethers.JsonRpcProvider(config.rpcUrl);

// Wallet random = 0x4069d40823F501bF6676586b805E1Bc98C2e4879
// Mi wallet (metamask) = 0xeb22D81f1e232b05F88F1d90DF287300F5add91b

// ---- Hacer multiples transferencias ----

// (async () => {
//    // Saldo mi wallet
//    console.log('Saldo mi wallet: ');
//    console.log(
//       await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
//    );

//    // Creo una wallet random
//    const wallet = Wallet.createRandom();
//    console.log(wallet);
//    const privateKey = wallet.privateKey;
//    const adress = wallet.address;
//    console.log('Wallet nueva: ', privateKey, adress);

//    // Saldo wallet random
//    console.log('Saldo wallet nueva: ');
//    console.log(await obtenerSaldo(provider, adress));

//    // Envío etherium
//    const result = await enviarETH(
//       provider,
//       config.PRIVATE_KEY,
//       adress,
//       '0.0005'
//    );
//    console.log('Resultado: ');
//    const costoEth = ethers.formatEther(result.gasUsed * result.gasPrice);
//    console.log(costoEth);

//    // Saldo mi wallet
//    console.log('Saldo mi wallet: ');
//    console.log(
//       await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
//    );

//    // Saldo wallet random
//    console.log('Saldo wallet nueva: ');
//    console.log(await obtenerSaldo(provider, adress));

//    // Envío etherium
//    const result2 = await enviarETH(
//       provider,
//       privateKey,
//       '0xeb22D81f1e232b05F88F1d90DF287300F5add91b',
//       '0.00001'
//    );
//    console.log('Resultado: ');
//    const costoEth2 = ethers.formatEther(result2.gasUsed * result2.gasPrice);
//    console.log(costoEth2);

//    // Saldo mi wallet
//    console.log('Saldo mi wallet: ');
//    console.log(
//       await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
//    );

//    // Saldo wallet random
//    console.log('Saldo wallet nueva: ');
//    console.log(await obtenerSaldo(provider, adress));
// })();

// ---- Enviar una transferencia firmada ----
// sendSignedTransaction(config.PRIVATE_KEY);
// wrapETH(
//    provider,
//    config.PRIVATE_KEY,
//    '0x4069d40823F501bF6676586b805E1Bc98C2e4879',
//    '0.000001'
// ).then(console.log);
transferWETH(
   provider,
   config.PRIVATE_KEY,
   '0x10c3ff737861ffb1f4dd5530fd6c2bae6a54d5b5a764e97876752287fce1de53',
   '0x4069d40823F501bF6676586b805E1Bc98C2e4879',
   '0.000001'
);
