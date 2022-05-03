import React from 'react';
import {AppRouter} from "./routes/AppRouter";
import { WalletProvider } from 'context/walletContext';
import { ApiProvider } from 'context/apiContext';

function App() {
  return (
    <WalletProvider apiKey="c7ed1b78-dbdf-4291-9e5a-02a9cd78ad9f">
        <AppRouter />
    </WalletProvider>
  );
}

export default App;
