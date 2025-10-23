import { Wallet, Contract, parseEther } from 'ethers';

export async function wrapETH(
   provider,
   privateKey,
   contractAddress,
   amountEth
) {
   const wallet = new Wallet(privateKey, provider);
   const abi = ['function deposit() public payable'];
   const contract = new Contract(contractAddress, abi, wallet);

   const tx = await contract.deposit({ value: parseEther(amountEth) });
   console.log('Deposit tx:', tx.hash);

   const receipt = await tx.wait();
   console.log('Confirmada en block:', receipt.blockNumber);
   return receipt;
}

export async function transferWETH(
   provider,
   privateKey,
   contractAddress,
   to,
   amountEth
) {
   const wallet = new Wallet(privateKey, provider);
   const abi = ['function transfer(address to, uint256 amount)'];
   const contract = new Contract(contractAddress, abi, wallet);

   const tx = await contract.transfer(to, parseEther(amountEth));
   console.log('Transfer tx:', tx.hash);

   // const receipt = await tx.wait();
   // console.log('Confirmada en block:', receipt.blockNumber);
   // return receipt;
}
