import { useState } from 'react';
import Container from '../../components/container/container';
import FeedbacksFilter from '../../components/feedbacks-filter/feedbacks-filter';
import Header from '../../components/header/header';
import ProductCard from '../../components/product-card/product-card';
import TitleCard from '../../components/title-card/title-card';
import { useData } from '../../contexts/data';
import './home.scss';

export const filterCategories = [
    {
        type: 'All',
        value: 'all',
        status: false
    },
    {
        type: 'UI',
        value: 'ui',
        status: false
    },
    {
        type: 'UX',
        value: 'ux',
        status: false
    },
    {
        type: 'Enhancement',
        value: 'enhancement',
        status: true
    },
    {
        type: 'Bug',
        value: 'bug',
        status: false
    },
    {
        type: 'Feature',
        value: 'feature',
        status: false
    },
]

function Home() {
    const { data } = useData();
    const products = data.productRequests;
    const [ checkedType, setType ]  = useState(filterCategories.find(types => types.status === true))
    console.log(checkedType);

    return (
        <main className='main'>
            <Container className='main__container'>
                <div className='main__desk'>
                    <TitleCard />
                    <FeedbacksFilter filterCategories={filterCategories} checkedType={checkedType} />
                </div>
                <div className='main__page'>
                    <Header count={products.length} />
                    <ul className='products-card__list'>
                        {products
                            .map(product => <ProductCard key={product.id} properties={product} />)}
                    </ul>
                </div>
            </Container>
        </main>
    )
}

export default Home;