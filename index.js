// Importa ethers.js
const { ethers } = require('ethers');

// Usar un proveedor de RPC
const provider = new ethers.JsonRpcProvider(
   'https://sepolia.infura.io/v3/b161705534a341129f78574502de4154'
);

// Ejemplo de obtener el saldo de una dirección
async function obtenerSaldo() {
   const balance = await provider.getBalance(
      '0x956962C34687A954e611A83619ABaA37Ce6bC78A'
   ); // Dirección de ejemplo
   console.log('Balance:', ethers.formatEther(balance));
}

obtenerSaldo();
