import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useRouter } from 'next/router';

export default function App() {

    const router = useRouter();
    const shoe = JSON.parse(router.query.shoe);

	return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(shoe.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ shoe.title }</h4>
                    <p>{ shoe.content }</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-warning" 
                        style={{'marginLeft' : '5px'}}
                        onClick={() => Router.back()}
                    >뒤로가기</button> 
                </div>
            </div>
        </div> 
	)
}
