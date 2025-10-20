import { ethers, parseEther, Wallet } from 'ethers';
import { obtenerSaldo } from './src/utils/obtenerBalances.js';
import { enviarETH } from './src/utils/enviar.js';
import 'dotenv/config';

// Usar un proveedor de RPC
const provider = new ethers.JsonRpcProvider(
   'https://sepolia.infura.io/v3/b161705534a341129f78574502de4154'
);

// Wallet random = 0x4069d40823F501bF6676586b805E1Bc98C2e4879
// Mi wallet (metamask) = 0xeb22D81f1e232b05F88F1d90DF287300F5add91b

(async () => {
   // Saldo mi wallet
   console.log('Saldo mi wallet: ');
   console.log(
      await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
   );

   // Creo una wallet random
   const wallet = Wallet.createRandom();
   const privateKey = wallet.privateKey;
   const adress = wallet.address;
   console.log('Wallet nueva: ', privateKey, adress);

   // Saldo wallet random
   console.log('Saldo wallet nueva: ');
   console.log(await obtenerSaldo(provider, adress));

   // Envío etherium
   const result = await enviarETH(
      provider,
      process.env.PRIVATE_KEY,
      adress,
      '0.0005'
   );
   console.log('Resultado: ');
   const costoEth = ethers.formatEther(result.gasUsed * result.gasPrice);
   console.log(costoEth);

   // Saldo mi wallet
   console.log('Saldo mi wallet: ');
   console.log(
      await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
   );

   // Saldo wallet random
   console.log('Saldo wallet nueva: ');
   console.log(await obtenerSaldo(provider, adress));

   // Envío etherium
   const result2 = await enviarETH(
      provider,
      privateKey,
      '0xeb22D81f1e232b05F88F1d90DF287300F5add91b',
      '0.00001'
   );
   console.log('Resultado: ');
   const costoEth2 = ethers.formatEther(result2.gasUsed * result2.gasPrice);
   console.log(costoEth2);

   // Saldo mi wallet
   console.log('Saldo mi wallet: ');
   console.log(
      await obtenerSaldo(provider, '0xeb22D81f1e232b05F88F1d90DF287300F5add91b')
   );

   // Saldo wallet random
   console.log('Saldo wallet nueva: ');
   console.log(await obtenerSaldo(provider, adress));
})();
