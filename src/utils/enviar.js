import { ethers, parseEther } from 'ethers';

/**
 *
 * @param {*} provider Proveedor de blockchain
 * @param {string} privateKey Clave privada de la wallet (obtener en metamask)
 * @param {string} to Hash de la wallet a la que deseamos enviar transferencia
 * @param {string} amountEth Cantidad de eth deseados a enviar (en string)
 * @returns
 */
export async function enviarETH(provider, privateKey, to, amountEth) {
   const wallet = new ethers.Wallet(privateKey, provider);
   console.log(wallet.provider ? 'Wallet conectada' : 'No conectada');

   // create tx
   const tx = await wallet.sendTransaction({
      to,
      value: parseEther(amountEth)
   });

   console.log('Tx hash:', tx.hash);
   const receipt = await tx.wait();
   console.log('Confirmada en block', receipt.blockNumber);
   return receipt;
}
