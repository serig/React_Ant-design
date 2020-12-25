import React from 'react';
import products from "../data/products";
import { Row, Col, Card, Button } from "antd";

const {Meta} = Card

const buttonStyle = {
    backgroundColor:'#442e07',
    color:'#fff'

}
const MainContent = ()=> {
    console.log(products);
    const listItems = products.map((item)=>
       <Col  md={{ span: 8 }}  >
        <div className="card" key={item.id}>
           <Card
            hoverable
            cover={<img alt="viande" src={item.img}  />}
        >
            <Meta title={item.name}  />
            <p>{item.price}<span>{item.currency}</span></p>
            <Button style={buttonStyle}>Add to card</Button>
        </Card>
       
        </div>
        </Col>
    )
    return (
        <div>
            <Row gutter={[16, 16]}>
              {listItems}
           </Row>
           
        </div>
    )
}

export default MainContent;
