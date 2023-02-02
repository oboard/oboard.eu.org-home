/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode.react"; // 引入二维码

type dlink = {
  name: string;
  url: string;
};

export function ComLink(props: dlink) {
  return (
    <Link href={props.url} className="flex flex-col gap-2 items-center">
      <QRCode
        className="qrcode"
        value={props.url}
        size={80} // 二维码图片大小
        bgColor="#fff1d1" // 二维码背景颜色
        fgColor="#000" // 二维码图案颜色
      />
      <button className="btn btn-primary">{props.name}</button>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>咸鱼待办</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col gap-2">
        <Image src='/a.png' alt='icon' width={80} height={80}/>
        <div className="flex flex-row gap-2">
          <ComLink
            name="下载安卓版 蓝奏云"
            url="https://obb.lanzoul.com/b00nvuw4b"
          />
          <ComLink
            name="下载iOS版 TestFlight"
            url="https://testflight.apple.com/join/l1e6wUP4"
          />
        </div>
      </main>
    </>
  );
}
