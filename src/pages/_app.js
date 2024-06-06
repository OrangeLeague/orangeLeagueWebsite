import { MemoizedOurVision } from "@/modules/Home/OurVision";
import { MemoizedFooter } from "@/modules/Layout/Footer";
import { MemoizedHeader } from "@/modules/Layout/Header";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <MemoizedHeader />
      <Component {...pageProps} />
      <MemoizedFooter />
    </>
  );
}
