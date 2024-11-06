import React, { useState, useEffect } from "react";
import nftMarketplaceabi from "../constants/NftMarketplaceabi.json";
import basicnftabi from "../constants/BasicNftabi.json";
import { useAccount, useReadContract } from "wagmi";
import { Card } from "@chakra-ui/react";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "./ui/hover-card";
import { ethers } from "ethers";
import { Box, Link, Strong } from "@chakra-ui/react";
import UpdateListing from "../components/UpdateListing";
import BuyListing from "../components/BuyListing";

const NFTBox = ({ tokenid, price, seller, nftaddress }) => {
  const [imageuri, setimageuri] = useState("");
  const [tokenname, settokenname] = useState("");
  const [tokendescription, settokendescription] = useState("");
  const { address } = useAccount();
  let formattedseller;
  if (seller === address) {
    formattedseller = "you";
  } else {
    formattedseller = seller;
  }

  // get tokenuri by using moralis web3contract hook to call tokenuri from basic nft contract

  const { data, isPending, isSuccess } = useReadContract({
    abi: basicnftabi,
    address: nftaddress,
    functionName: "tokenURI",
    args: [tokenid],
  });

  async function displayimage() {
    if (data) {
      const tokenURI = data;
      const tokenURIaccessible = tokenURI.replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      );

      const tokenURIobject = await (await fetch(tokenURIaccessible)).json();
      const imageURI = tokenURIobject.image;
      const imageURIaccessible = imageURI.replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      );
      setimageuri(imageURIaccessible);
      settokenname(tokenURIobject.name);
      settokendescription(tokenURIobject.description);
      console.log(isPending);
      console.log(isSuccess);
      console.log(imageURIaccessible);
      // document.getElementById("nftimg").src = imageURIaccessible;
    }
  }

  useEffect(() => {
    displayimage();
  }, [data]);
  return (
    <div>
      <HoverCardRoot>
        <HoverCardTrigger asChild>
          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Title className="font-bold">{`${tokenname}#${tokenid}`}</Card.Title>
              <div className="p-2">
                <Card.Description>
                  <span className="font-bold block">
                    {ethers.formatUnits(BigInt(price.toString()), "ether")} ETH
                  </span>
                  {imageuri ? <img src={imageuri} /> : <span>Loading ...</span>}
                  {tokendescription}
                  <span className="italic text-sm block">
                    Owned by {formattedseller}
                  </span>
                </Card.Description>
              </div>
            </Card.Body>
            <Card.Footer justifyContent="flex-end"></Card.Footer>
          </Card.Root>
        </HoverCardTrigger>
        <HoverCardContent maxWidth="240px">
          {formattedseller === "you" ? (
            <>
              <HoverCardArrow />
              <Box>
                <UpdateListing
                  tokenid={tokenid}
                  price={price}
                  nftaddress={nftaddress}
                />
              </Box>
            </>
          ) : (
            <>
              <HoverCardArrow />
              <Box>
                <BuyListing
                  tokenid={tokenid}
                  price={price}
                  nftaddress={nftaddress}
                />
              </Box>
            </>
          )}
        </HoverCardContent>
      </HoverCardRoot>
    </div>
  );
};

export default NFTBox;
