import { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Checkpoint</title>
                <meta name="description" content="countries" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};