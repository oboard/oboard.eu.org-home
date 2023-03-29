/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode.react"; // 引入二维码

import icon from "assets/a.png";
import { AiFillApple } from 'react-icons/ai';
import { FcAndroidOs } from 'react-icons/fc';
import { useRouter } from "next/router";
import { NextPageContext } from "next";


type dlink = {
  name: string
  icon: any
  url: string
};

export function ComLink(props: dlink) {
  return (
    <Link href={props.url} className="flex flex-col gap-2 items-center">
      <QRCode
        className="qrcode"
        value={props.url}
        size={80} // 二维码图片大小
        bgColor="#fff" // 二维码背景颜色
        fgColor="#000" // 二维码图案颜色
      />
      <button className="btn gap-2">
        {props.icon}
        {props.name}</button>
    </Link>
  );
}

function Home(props: any) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Ticking App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col gap-4 items-center">

        <span className='text-4xl flex flex-row items-center gap-2'><Image src={icon} alt='icon' width={64} height={64} />Ticking App</span>
        <span className='text-lg'>待办｜计时｜自习室</span>
        {router.query.user && props.user && <div className="flex flex-col items-center">
          <Image alt="head" src={props.user.avatar} width={128} height={128}></Image>
          <span className="text-xl">{props.user.name}</span>
          <span>在软件中打开此链接查看用户信息</span>
        </div>}
        {router.query.studyroom && <span>在软件中打开此自习室</span>}
        <div className="flex flex-wrap gap-2">
          <ComLink
            name="下载安卓版 蓝奏云"
            icon={<FcAndroidOs size={24} />}
            url="https://obb.lanzoul.com/b00nvuw4b"
          />
          <ComLink
            name="下载iOS版 TestFlight"
            icon={<AiFillApple size={24} />}
            url="https://testflight.apple.com/join/l1e6wUP4"
          />
        </div>
      </main>
    </>
  );
}

Home.getInitialProps = async ({ query }: NextPageContext) => {
  const { user } = query;

  const res = await fetch(`http://todo.i99yun.com/v2/account/get_simple_user_info?userId=${Number(user)}`)
  const json = await res.json()
  console.log(json)
  return { user: json.data }
}

export default Home;