import { ethers, Contract } from 'ethers';

/**
 * @param {ethers.JsonRpcProvider} provider el proveedor de servicios (red de sepolia)
 * @param {string} direccion la direccion de la wallet/contract ej: 0x956962C34687A954e611A83619ABaA37Ce6bC78A
 * @returns el balance de la cuenta (number)
 */
export async function obtenerSaldo(provider, direccion) {
   const balance = await provider.getBalance(direccion);
   return ethers.formatEther(balance);
}
