import Container from '../../components/container/container';
import TitleCard from '../../components/title-card/title-card';
import './home.css';

function Home() {
    return (
        <main className='main'>
            <Container>
                <div className='main__desk'>
                    <TitleCard />
                </div>
                <div className='main__page'></div>
            </Container>
        </main>
    )
}

export default Home;