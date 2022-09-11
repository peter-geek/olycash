import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-[100vh] relative overflow-hidden bg-white">
            <Head>
                <title>OlyCash</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
                ></meta>
                <meta
                    name="description"
                    content="Use OlyCash to pay or get paid with cash anywhere, online or offline. Available on mobile, web, QR scan and SMS so that you have access to your cash wherever you are."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full top-0 left-0 absolute z-10">
                <div className="__bg relative w-full h-[100vh]">
                    <Image
                        alt="banner"
                        src="/images/banner.png"
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
            </div>
            <div className="absolute left-0 top-0 z-20 h-[100vh] flex flex-col overflow-y-auto">
                <nav>
                    <Link href="/">
                        <a className="flex">
                            <span className="w-[60px] relative">
                                <Image
                                    src="/images/logo-olycash.png"
                                    alt="logo"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </span>
                            <span>OlyCash</span>
                        </a>
                    </Link>
                </nav>
                <div></div>
            </div>
        </div>
    );
}
