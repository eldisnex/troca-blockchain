import { ethers } from 'ethers';

/**
 * @param provider el proveedor de servicios (red de sepolia)
 * @param direccion la direccion de la wallet/contract ej: 0x956962C34687A954e611A83619ABaA37Ce6bC78A
 * @returns el balance de la cuenta (number)
 */
export async function obtenerSaldo(provider, direccion) {
   const balance = await provider.getBalance(direccion); // Dirección de ejemplo
   return ethers.formatEther(balance);
}
