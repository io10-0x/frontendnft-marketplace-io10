"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Link } from "react-router-dom";
import { ConnectKitButton } from "connectkit";

const ManualHeader = () => {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
      <h1 className="font-bold text-3xl flex-grow">NFT Marketplace</h1>
      <Link to="/" className="mr-4 p-6">
        Home
      </Link>
      <Link to="/sellnft" className="mr-4 p-6">
        Sell NFT
      </Link>
      <ConnectKitButton /> {/* Optionally add the ConnectKit button */}
      <div>{error?.message}</div>
    </nav>
  );
};

export default ManualHeader;
