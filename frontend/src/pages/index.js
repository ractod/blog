import React, { useEffect } from 'react';

// components
import Banner from '@components/homePage/Banner';
import AboutUsSec from '@components/homePage/AboutUsSec';
import OurfeaturesSec from '@components/homePage/OurfeaturesSec';
import PopularBlosSec from '@components/homePage/PopularBlosSec';

// library
import axios from 'axios';

// helper
import { notify } from '@helper/functions';

// next
import Head from 'next/head';

const index = ({ postsData, error = false}) => {

    useEffect(() => {
        if(error) notify("error", "خطایی در برقرای ارتباط با سرور پیش آمد")
    }, [])

    return (
        <>
            <Head>
                <title> بلاگ تود </title>
            </Head>
            <main>
                <Banner />
                <AboutUsSec />
                <OurfeaturesSec />
                {/* if data fetching failed don't show this section */}
                { postsData.length > 0 &&  <PopularBlosSec postsData={postsData} newestOnTop={true} rtl={true} /> }
            </main>
        </>
    );
};

export default index;

export const getStaticProps = async () => {
    try {
        const { data } = await axios.get("/posts?sort=popular")
        return {
            props: { postsData: data.data.docs, revalidate: 1 },
        }
    } catch {
        return { props: { postsData: [], error: true } }
    }
}