import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import ProductCard from "../../components/product-card/product-card";
import { useData } from "../../contexts/data";
import dropLeft from '../../assets/images/drop-left.svg';
import CommonBtn from "../../components/common-btn/common-btn";
import './feedback.scss'
import Comments from "../../components/comments/comments";
import AddComment from "../../components/add-comment/add-comment";

function Feedback({ }) {
    const paramValue = useParams()
    const { data } = useData()
    const obj = data.productRequests.find(product => product.id === +paramValue.id)

    return (
        <div className="feedback">
            <Container className="feedback__container">
                <div className="feedback__head">
                    <div className="feedback__head-left">
                        <img className="feedback__head-left--icon" src={dropLeft}/>
                        <Link className="feedback__head-left--link" to="/">Go Back</Link>
                    </div>
                    <CommonBtn to='/edit' className='feedback__head-edit'>Edit Feedback</CommonBtn>
                </div>
                <ProductCard properties={obj} />
                {obj.comments ? <Comments comments={obj.comments} /> : ""}
                <AddComment />
            </Container>
        </div>

    )

}

export default Feedback