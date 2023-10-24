import {Row,Col} from 'react-bootstrap';
import { productsArray } from './productsStore';
import ProductCard from './ProductCard';

export const Store = () =>{

    return (
        <div className="container">
            <br />

            <>
            <h1 align="center" className='p-3'>Welcome to the store!</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product,idx) => (
                    <Col align="center" key={idx}>
                     <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            </>

            <br />
       </div>
    )
  
}
  
  export default Store;




  //export const DacSchools = ({ createSchoolRecord, fetchECCSchoolData,fetchECCSchoolDataMYSQL,fetchSchoolDataMongoDBAtlas,createSchoolRecordMongoDBAtlas,fetchECCSchoolDataV8 }) => {