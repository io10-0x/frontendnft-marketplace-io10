import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import {
  http,
  cookieStorage,
  createConfig,
  createStorage,
  WagmiProvider,
} from "wagmi";
import { mainnet, sepolia, localhost } from "wagmi/chains";
import { MoralisProvider } from "react-moralis";
import { Provider } from "./components/ui/provider";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, sepolia, localhost],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(`${import.meta.env.VITE_MAINNET_RPC_URL}`),
      [sepolia.id]: http(`${import.meta.env.VITE_SEPOLIA_RPC_URL}`),
      [localhost.id]: http(`${import.meta.env.VITE_LOCALHOST_RPC_URL}`),
    },

    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,

    // Required API Keys
    walletConnectProjectId:
      import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ||
      "5047f6e364ef72ce07c0df80f7a9ca47",

    // Required App Info
    appName: "NFT Marketplace",

    // Optional App Info
    appDescription: "NFT Marketplace",
    appUrl: "http://localhost:3000/", // your app's url
    // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <Provider>
            <MoralisProvider
              serverUrl={import.meta.env.VITE_SERVER_URL ?? ""}
              appId={import.meta.env.VITE_APPLICATION_ID ?? ""}
            >
              <App />
            </MoralisProvider>
          </Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
