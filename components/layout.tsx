import type { NextPage } from 'next';
import Navbar from './navbar';
import Head from 'next/head';

interface Props {
    children: JSX.Element
}

const Layout: NextPage<Props> = (props) => {
    return (
        <div className="layout">
            <Head>
                <title>Booking App</title>
            </Head>
            <Navbar />
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;