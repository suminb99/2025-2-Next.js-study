import "@/styles/globals.css";
import type { AppProps } from "next/app";

// component = 페이지 역할
// component에 전달될 페이지의 props 모음
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>글로벌 헤더</header>
      <Component {...pageProps} />
    </>
  );
}
