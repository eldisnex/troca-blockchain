import 'dotenv/config';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// export const rpcUrl = 'https://ethereum-rpc.publicnode.com/';
export const rpcUrl = 'https://ethereum-sepolia-rpc.publicnode.com';
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
