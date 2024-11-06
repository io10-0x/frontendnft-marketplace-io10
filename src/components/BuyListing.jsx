import React from "react";
import { useWriteContract } from "wagmi";
import nftMarketplaceabi from "../constants/NftMarketplaceabi.json";
import nftmarketplaceaddress from "../constants/Nftmarketplaceaddress.json";
import { ethers } from "ethers";
import { useState } from "react";

const BuyListing = ({ nftaddress, price, tokenid }) => {
  // Initialize state to capture user input
  const [inputtedValue, setInputtedValue] = useState("");

  // Update state as the user types
  const handleInputChange = (event) => {
    setInputtedValue(event.target.value);
  };
  const { writeContract, data, isPending, isSuccess, error } =
    useWriteContract();
  const buylisting = async () => {
    writeContract({
      abi: nftMarketplaceabi,
      address: nftmarketplaceaddress,
      functionName: "buyItem",
      args: [nftaddress, tokenid],
      value: price,
    });
    console.log(price);
  };

  return (
    <div>
      <button onClick={buylisting}>Buy Listing</button>
    </div>
  );
};

export default BuyListing;
