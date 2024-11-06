import React from "react";
import { useWriteContract } from "wagmi";
import nftMarketplaceabi from "../constants/NftMarketplaceabi.json";
import nftmarketplaceaddress from "../constants/Nftmarketplaceaddress.json";
import { ethers } from "ethers";
import { useState } from "react";

const UpdateListing = ({ nftaddress, price, tokenid }) => {
  // Initialize state to capture user input
  const [inputtedValue, setInputtedValue] = useState("");

  // Update state as the user types
  const handleInputChange = (event) => {
    setInputtedValue(event.target.value);
  };
  const { writeContract, data, isPending, isSuccess, error } =
    useWriteContract();
  const updatelisting = async () => {
    const newprice = ethers.parseEther(inputtedValue);
    let updatedprice;
    if (newprice) {
      updatedprice = newprice;
    } else {
      updatedprice = BigInt(price.toString());
    }

    writeContract({
      abi: nftMarketplaceabi,
      address: nftmarketplaceaddress,
      functionName: "updateListing",
      args: [nftaddress, tokenid, updatedprice],
    });
    console.log(price);
  };

  return (
    <div>
      <input
        id="ethamount"
        placeholder="Enter New Price in ETH"
        value={inputtedValue}
        onChange={handleInputChange} // Update state on change
      />
      <button onClick={updatelisting}>Update Listing</button>
    </div>
  );
};

export default UpdateListing;
