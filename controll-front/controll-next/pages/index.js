import Head from "next/head";
import Button from "../components/buttom/button";
import { commandButtons } from "../constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <Head>
        <title>Remote Controll</title>
        <meta name="Remote Controll" content="PWA App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {commandButtons.map((i) => {
        return <Button key={i.name} item={i} />;
      })}
    </div>
  );
}
