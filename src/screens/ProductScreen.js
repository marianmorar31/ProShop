import React,{useState,useEffect} from 'react';
import {Form, Link,useParams} from 'react-router-dom';
//import { useDispatch,useSelector } from 'react-redux';
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
//import Loader from '../components/Loader';
//import Message from '../components/Message';
//import { listProductsDetails } from '../actions/productActions';
import axios from 'axios';

const ProductScreen = () => {
  const [product,setProduct] = useState({});
  const [qty,setQty] = useState(0);
      const { id } = useParams();
  //console.log(id);
  //const dispatch =useDispatch();
  
//const productDetails = useSelector(state => state.productDetails);
  //const { loading, error, product } = productDetails;
  //console.log(id);
  //console.log(product);
    //const product = products.find((p) => String(p._id) === id);
   // if (!product)
   // return null;

   useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`);

      setProduct(data);
    }
    fetchProduct()
     // dispatch(listProductsDetails(id));

      // console.log(product);
  },[])
  //dispatch
  //const product = {};
  
  return  (
        <>

      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
    
    
      
   
        
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid>

            </Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
                 <h3>
                  {product.name};
                 </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.raiting} text={`${product.numReviews} reviews`}>

              </Rating>
            </ListGroup.Item>
            <ListGroup.Item>
                  Price:${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                  Description:{product.description}
            </ListGroup.Item>
          </ListGroup>

        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                       Price:
                    
                  </Col>
                  <Col>
                     <strong>
                          ${product.price}
                     </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                       Status:
                  </Col>
                  <Col>
                     
                     {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}

                  </Col>
                </Row>
              </ListGroup.Item>
              
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                    
                      
                      
                    
                         
                      
                    </Row>
                  </ListGroup.Item>
                        )} 
                 

                  <ListGroupItem>
                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                      Add to Cart
                    </Button>

                  </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
    </Row>

  

  
     
      </>
  );
  }

export default ProductScreen;

