import { Link } from 'react-router-dom';
import { useData } from '../../contexts/data';
import './roadmap-filter.scss';

function RoadmapFilter() {
    const { data } = useData();
    const planned = data.productRequests.filter(product => product.status === "planned").length;
    const inProgress = data.productRequests.filter(product => product.status === "in-progress").length;
    const live = data.productRequests.filter(product => product.status === "live").length;
    const suggestion = data.productRequests.filter(product => product.status === "suggestion").length;

    return (
        <section className='roadmap-filter'>
            <div className='roadmap-filter__head'>
                <h2 className='roadmap-filter__title'>Roadmap</h2>
                <Link to={`/kanban`} className='roadmap-filter__link'>View</Link>
            </div>
            <ul className='roadmap-filter__list'>
                <li className='roadmap-filter__list-item'>
                    <span className='roadmap-filter__list-item--cycle'></span>
                    <span className='roadmap-filter__list-item--name'>Planned</span>
                    <span className='roadmap-filter__list-item--count'>{planned}</span>
                </li>
                <li className='roadmap-filter__list-item'>
                    <span className='roadmap-filter__list-item--cycle'></span>
                    <span className='roadmap-filter__list-item--name'>In-Progress</span>
                    <span className='roadmap-filter__list-item--count'>{inProgress}</span>
                </li>
                <li className='roadmap-filter__list-item'>
                    <span className='roadmap-filter__list-item--cycle'></span>
                    <span className='roadmap-filter__list-item--name'>Live</span>
                    <span className='roadmap-filter__list-item--count'>{live}</span>
                </li>
                <li className='roadmap-filter__list-item'>
                    <span className='roadmap-filter__list-item--cycle'></span>
                    <span className='roadmap-filter__list-item--name'>Suggestion</span>
                    <span className='roadmap-filter__list-item--count'>{suggestion}</span>
                </li>
            </ul>
        </section>
    )
}

export default RoadmapFilter