import { Contract, formatEther } from 'ethers';

export async function getContract(provider, contractAddress) {
   const contract = new Contract(
      contractAddress,
      [
         'function name() view returns (string)',
         'function symbol() view returns (string)',
         'function decimals() view returns (uint8)',
         'function balanceOf(address owner) view returns (uint256)',
         'function deposit() payable'
      ],
      provider
   );
   const [name, symbol, decimals] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.decimals()
   ]);

   console.log(`Contract Name: ${name}`);
   console.log(`Contract Symbol: ${symbol}`);
   console.log(`Contract Decimals: ${decimals}`);

   const address = '0x9079940df8b19C46A1b3731DB7ad08a7cc84b136';
   const balance = await contract.balanceOf(address);
   console.log(`Balance of ${address}: ${formatEther(balance)} WETH`);
}
