import Moralis from "moralis-v1/node.js";
import contractaddresses from "./src/constants/networkMappings.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

/* Moralis init code */
const serverUrl = process.env.VITE_SERVER_URL;
const appId = process.env.VITE_APPLICATION_ID;
const masterKey = process.env.MORALIS_API_KEY;
const chainId = process.env.CHAIN_ID;
const contractaddress =
  contractaddresses[chainId]["Nftmarketplace"][
    contractaddresses[chainId]["Nftmarketplace"].length - 1
  ].toString();

const watchEvent = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });
  let ItemListedoptions = {
    chainId: chainId,
    address: contractaddress,
    topic: "ItemListed(uint256, uint256, address)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenid",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "nftaddress",
          type: "address",
        },
      ],
      name: "ItemListed",
      type: "event",
    },
    limit: 500000,
    tableName: "ItemListed",
    sync_historical: true,
  };

  let ItemBoughtoptions = {
    chainId: chainId,
    address: contractaddress,
    topic: "ItemBought(uint256, uint256, address, address, address)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenid",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "previousowner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "nftaddress",
          type: "address",
        },
      ],
      name: "ItemBought",
      type: "event",
    },
    limit: 500000,
    tableName: "ItemBought",
    sync_historical: true,
  };

  let ItemUnlistedoptions = {
    chainId: chainId,
    address: contractaddress,
    topic: "ItemUnlisted(address,address,uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "nftaddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenid",
          type: "uint256",
        },
      ],
      name: "ItemUnlisted",
      type: "event",
    },
    limit: 500000,
    tableName: "ItemUnlisted",
    sync_historical: true,
  };

  let ItemUpdatedoptions = {
    chainId: chainId,
    address: contractaddress,
    topic: "ItemUpdated(address,address,uint256,uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "nftaddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenid",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newprice",
          type: "uint256",
        },
      ],
      name: "ItemUpdated",
      type: "event",
    },
    limit: 500000,
    tableName: "ItemUpdated",
    sync_historical: true,
  };

  const boughtresponse = await Moralis.Cloud.run(
    "watchContractEvent",
    ItemBoughtoptions,
    { useMasterKey: true }
  );
  const itemlistedresponse = await Moralis.Cloud.run(
    "watchContractEvent",
    ItemListedoptions,
    { useMasterKey: true }
  );
  const itemcancelledresponse = await Moralis.Cloud.run(
    "watchContractEvent",
    ItemUnlistedoptions,
    { useMasterKey: true }
  );
  const itemupdatedresponse = await Moralis.Cloud.run(
    "watchContractEvent",
    ItemUpdatedoptions,
    { useMasterKey: true }
  );

  if (
    boughtresponse.success &&
    itemlistedresponse.success &&
    itemcancelledresponse.success &&
    itemupdatedresponse.success
  ) {
    console.log("Currently listening for events....");
  } else {
    console.log("An error occured");
  }
};

watchEvent()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
