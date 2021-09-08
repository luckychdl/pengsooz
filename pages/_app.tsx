import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createContext } from "react";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalContext.Provider value>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

export default MyApp;
