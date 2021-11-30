import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row,Col,ListGroup,Card,Button,Image, Form} from "react-bootstrap"
import Rating from '../components/Rating'
import {useDispatch,useSelector} from "react-redux"
import {listProductDetails} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const ProductScreen = ({history,match}) => {
    const [qty,setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state=>state.productDetails)
    const {loading,error,product} = productDetails

    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch,match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            {loading ? <Loader/>: error? <Message variant="danger">{error}</Message> :
            (
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: GHC{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>GHC{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Discounted Price:
                                    </Col>
                                    <Col>
                                        {(product.price * 90)/100}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                        <Form.Control as="select" value={qty} onChange={(e)=>
                                        setQty(e.target.value)}>
                                          {[...Array(product.countInStock).keys()].map(x=>(
                                              <option key={x+1} vlaue={x+1}>
                                                  {x+1}
                                              </option>
                                          ))}
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock===0}
                                    onClick={addToCartHandler}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
        </>
    )
}

export default ProductScreen
