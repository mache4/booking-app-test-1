import type { NextPage } from 'next';
import { useState } from 'react';
import Hotels from '../components/hotels';
import Layout from '../components/layout';
import SearchForm from '../components/search-form';

const Home: NextPage = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Layout>
            <div className="home">
                <SearchForm setSearchValue={setSearchValue} />
                <Hotels searchValue={searchValue} />
            </div>
        </Layout>
    );
}

export default Home;
