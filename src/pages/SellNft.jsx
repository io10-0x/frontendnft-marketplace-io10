import { Button, Collapsible, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import nftMarketplaceabi from "../constants/NftMarketplaceabi.json";
import basicnftabi from "../constants/BasicNftabi.json";
import nftmarketplaceaddress from "../constants/Nftmarketplaceaddress.json";
import { ethers } from "ethers";
import ManualHeader from "../components/ManualHeader";
import WithdrawProceeds from "../components/WithdrawProceeds";
import { Fieldset, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { Alert } from "../components/ui/alert";

const SellNft = () => {
  const [inputtedNftAddress, setInputtedNftAddress] = useState("");
  const [inputtedTokenId, setInputtedTokenId] = useState("");
  const [inputtedPrice, setInputtedPrice] = useState("");
  const [isForminValid, setisForminValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the relevant state variable based on the input's name
    if (name === "nftaddress") {
      setInputtedNftAddress(value);
    } else if (name === "tokenid") {
      setInputtedTokenId(value);
    } else if (name === "price") {
      setInputtedPrice(value);
    }
  };

  const handleclick = async () => {
    !(inputtedNftAddress && inputtedTokenId && inputtedPrice)
      ? setisForminValid(true)
      : await approveitem();
  };

  const { writeContract, data, isPending, isSuccess, error, onSettled } =
    useWriteContract();

  const approveitem = async () => {
    await writeContract(
      {
        abi: basicnftabi,
        address: inputtedNftAddress,
        functionName: "approve",
        args: [nftmarketplaceaddress, inputtedTokenId],
      },
      {
        onSettled: async () => {
          await listitem();
          console.log(data);
        },
      }
    );
  };
  const listitem = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Wait for 10 seconds (10000 milliseconds)
    await delay(10000);
    writeContract({
      abi: nftMarketplaceabi,
      address: nftmarketplaceaddress,
      functionName: "listItem",
      args: [
        inputtedNftAddress,
        inputtedTokenId,
        ethers.parseEther(inputtedPrice),
      ],
    });
    console.log("item listed");
  };

  return (
    <div>
      <ManualHeader />
      <Fieldset.Root size="lg">
        <Fieldset.Legend className="font-bold text-2xl flex-grow">
          Listing details
        </Fieldset.Legend>
        <Fieldset.Content>
          <Field label="Nft Address" className="font-bold flex-grow">
            <Input
              name="nftaddress"
              value={inputtedNftAddress}
              onChange={handleInputChange}
              placeholder="Enter Address of NFT to list"
            />
          </Field>

          <Field label="Token Id" className="font-bold flex-grow">
            <Input
              name="tokenid"
              value={inputtedTokenId}
              onChange={handleInputChange}
              placeholder="Enter Token Id of NFT to list"
            />
          </Field>

          <Field label="Price" className="font-bold flex-grow">
            <Input
              name="price"
              value={inputtedPrice}
              onChange={handleInputChange}
              placeholder="Enter Price of NFT to list"
            />
          </Field>
        </Fieldset.Content>
      </Fieldset.Root>
      <div>
        <Button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
          loading="true"
          onClick={() => {
            handleclick();
          }}
        >
          List Nft
        </Button>
        {isForminValid && (
          <Collapsible.Root unmountOnExit>
            <Collapsible.Trigger paddingY="3">
              <Alert status="error" title="Error">
                You cannot list this item. Click to see error message.
              </Alert>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Alert status="error">
                Enter the correct details into the nft address, token id and
                price fields to list nft.
              </Alert>
            </Collapsible.Content>
          </Collapsible.Root>
        )}
      </div>
      <div className="p-5 border-b-2 flex flex-row justify-between items-center">
        <WithdrawProceeds />
      </div>
    </div>
  );
};

export default SellNft;
