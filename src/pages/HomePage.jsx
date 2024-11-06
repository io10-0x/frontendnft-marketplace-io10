import React from "react";
import { useMoralisQuery } from "react-moralis";
import ManualHeader from "../components/ManualHeader";
import NFTBox from "../components/NFTBox";
import { useAccount } from "wagmi";

const HomePage = () => {
  const { data, error, isLoading } = useMoralisQuery(
    "Recentlylistedtable",
    (query) => {
      return query.limit(10);
    }
  );
  const { isConnected, address } = useAccount();

  console.log(data);
  return (
    <>
      <div>
        <ManualHeader />

        {isConnected ? (
          <div className="container">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed </h1>
            <div className="flex flex-wrap gap-4">
              {data.map((nft) => (
                <div key={nft.id}>
                  {/* Access attributes using .get() */}

                  <NFTBox
                    tokenid={nft.get("tokenId")}
                    price={nft.get("price")}
                    seller={nft.get("seller")}
                    nftaddress={nft.get("nftAddress")}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>Please Connect Wallet</div>
        )}
      </div>
    </>
  );
};

export default HomePage;
