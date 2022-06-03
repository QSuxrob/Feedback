import { createContext, useState } from 'react';
import Container from '../../components/container/container';
import Header from '../../components/header/header';
import ProductCard from '../../components/product-card/product-card';
import TitleCard from '../../components/title-card/title-card';
import FeedbacksFilter from '../../components/feedbacks-filter/feedbacks-filter'
import { useData } from '../../contexts/data';
import './home.scss';
import RoadmapFilter from '../../components/roadmap-filter/roadmap-filter';

export const FilterContext = createContext()

function Home() {
    const { data } = useData();
    const [ isFilter, setFilter ] = useState("all")
    const count = data.productRequests.filter(product => {
        if (isFilter === "all") {
            return product
        } else if (isFilter === product.category) {
            return product
        }
    }).length

    return (
        <FilterContext.Provider value={ {isFilter, setFilter} }>
            <main className='main'>
                <Container className='main__container'>
                    <div className='main__desk'>
                        <TitleCard />
                        <FeedbacksFilter />
                        <RoadmapFilter />
                    </div>
                    <div className='main__page'>
                        <Header count={count}/>
                        <ul className='products-card__list'>
                            {data.productRequests
                                .filter(product => {
                                    if (isFilter === "all") {
                                        return product
                                    } else if (isFilter === product.category) {
                                        return product
                                    }
                                })
                                .map(product => <ProductCard key={product.id} properties={product} />)}
                        </ul>
                    </div>
                </Container>
            </main>
        </FilterContext.Provider>
    )
}

export default Home;