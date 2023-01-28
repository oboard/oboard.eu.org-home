import { AppNavigation, NavItem } from "@/components/AppNavigation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const navigation: Array<NavItem> = [
    { title: "主页", path: "/", children: [] },
    { title: "短歌行", path: "/duangexing", children: [] },
  ];
  return (
    <Html lang="zh">
      <Head>
        <meta name="description" content="一块小板子的主页" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>
              <div className="flex flex-col h-screen overflow-y-hidden">
                <div className="w-full navbar sticky z-10 bg-base-100 shadow shadow-gray-200 dark:shadow-gray-900">
                  <div className="flex-none lg:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl gap-2">
                      <div className="avatar">
                        <div className="w-10 mask mask-squircle">
                          <img
                            src="https://upload.jianshu.io/users/upload_avatars/8761709/3101d25e-1917-47dd-bdee-58bbda3352ac.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp"
                            alt="head"
                          />
                        </div>
                      </div>
                      <span>一块小板子</span>
                    </a>
                  </div>
                </div>
                <div className="w-full flex-1 overflow-y-scroll">
                  <div className="flex-1 mx-4 pb-24 py-16">
                    <div className="flex justify-center">
                      <Main />
                    </div>
                  </div>
                </div>
              </div>
        </main>

        <NextScript />
      </body>
    </Html>
  );
}

// 以前的汉堡
{/* <main>
<div className="">
  <div className="drawer">
    <input
      id="my-drawer-3"
      type="checkbox"
      className="drawer-toggle"
    />
    <div className="drawer-content flex flex-col h-screen overflow-y-hidden">
      <div className="w-full navbar sticky z-10 bg-base-100 shadow shadow-gray-200 dark:shadow-gray-900">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl gap-2">
            <div className="avatar">
              <div className="w-10 mask mask-squircle">
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/8761709/3101d25e-1917-47dd-bdee-58bbda3352ac.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp"
                  alt="head"
                />
              </div>
            </div>
            <span>一块小板子</span>
          </a>
        </div>
      </div>
      <div className="w-full flex-1 overflow-y-scroll">
        <div className="fixed w-64 min-h-screen bg-base-200 hidden lg:block">
          <ul className="menu p-4 flex flex-col-reverse justify-end">
            <AppNavigation navigationTree={navigation} />
          </ul>
        </div>
        <div className="flex-1 mx-4 pb-24 lg:ml-80 py-16">
          <div className="flex justify-center">
            <Main />
          </div>
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 flex-col-reverse justify-end">
        <AppNavigation navigationTree={navigation} />
      </ul>
    </div>
  </div>
</div>
</main> */}