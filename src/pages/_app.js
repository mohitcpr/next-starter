import "./styles/globals.css";
import "../static/css/style.css";
import getConfig from "next/config";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();
  console.log("publicRuntimeConfig", publicRuntimeConfig);
  const router = useRouter();
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
