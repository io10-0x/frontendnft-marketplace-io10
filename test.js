import contractaddresses from "./src/constants/networkMappings.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

const chainId = process.env.CHAIN_ID;
const contractaddress =
  contractaddresses[chainId]["Nftmarketplace"][
    contractaddresses[chainId]["Nftmarketplace"].length - 1
  ].toString();
console.log(contractaddress);
console.log(chainId);
