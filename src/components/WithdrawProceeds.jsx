import React, { useState, useEffect } from "react";
import { useAccount, useWriteContract, useReadContract } from "wagmi";
import nftMarketplaceabi from "../constants/NftMarketplaceabi.json";
import nftmarketplaceaddress from "../constants/Nftmarketplaceaddress.json";
import { ethers } from "ethers";
import { Button, Collapsible, Box } from "@chakra-ui/react";

const WithdrawProceeds = () => {
  const [withdrawamounteth, setwithdrawamounteth] = useState("");
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const sendproceeds = async () => {
    writeContract({
      abi: nftMarketplaceabi,
      address: nftmarketplaceaddress,
      functionName: "withdrawProceeds",
    });
  };

  const { data, isPending, isSuccess } = useReadContract({
    abi: nftMarketplaceabi,
    address: nftmarketplaceaddress,
    functionName: "getproceeds",
  });

  useEffect(() => {
    if (data) {
      // Check if data is non-null
      const newetherval = ethers.formatUnits(data, "ether");
      setwithdrawamounteth(newetherval);
    } else {
      setwithdrawamounteth("0 ETH");
    }
  }, [data]);
  return (
    <div>
      <div> Total Proceeds: {withdrawamounteth}</div>
      <Button
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        size="md"
        onClick={() => {
          sendproceeds();
        }}
      >
        Withdraw Proceeds
      </Button>
    </div>
  );
};

export default WithdrawProceeds;
