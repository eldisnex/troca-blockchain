import { ethers } from 'ethers';
import { obtenerSaldo } from './src/utils/obtenerBalances.js';

// Usar un proveedor de RPC
const provider = new ethers.JsonRpcProvider(
   'https://sepolia.infura.io/v3/b161705534a341129f78574502de4154'
);

(async () => {
   const saldo = await obtenerSaldo(
      provider,
      '0x956962c34687a954e611a83619abaa37ce6bc78a'
   );

   console.log(saldo);
})();
