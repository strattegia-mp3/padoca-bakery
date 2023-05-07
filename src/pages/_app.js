import "/public/styles/globals.css";
import "/dist/output.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="">
      <Component {...pageProps} />
    </main>
  );
}
