import React,{useEffect} from 'react';
import Product from '../components/Product';
import {Row,Col} from 'react-bootstrap';
//import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';


const HomeScreen = () => {
    //const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
     const productList = useSelector(state => state.productList);
     const { loading,error,products } = productList;
    useEffect(() => {
     // const fetchProducts = async () => {
        //const {data} = await axios.get('/api/products');

       // setProducts(data);
    //  }
     // fetchProducts()
        
        dispatch(listProducts());


    },[dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
      
      {
      products.map((product) => (
         <Col key={product._id} sm={8} md={3} lg={3} xl={3} >
           <Product product={product}/>
           
         </Col>
        )
        )
        }
        
</Row> }
      
    </>
  );
}

export default HomeScreen;
