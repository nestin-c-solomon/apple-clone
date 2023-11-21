import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Latest.css';

function Latest() {
  return (
    <>
        <div className='container p-5'>
            <Row>
                <Col lg={6}>
                    <h1 className='fs-1 fw-bolder'>Store. <span style={{color:'#6e6e73'}}>The best way to buy the products you love.</span></h1>
                </Col>
                <Col lg={6}>
                    <div className='text-end'>
                        Need shopping help? <br />
                        <a href="" style={{textDecoration:'none'}}>Ask a specialist </a>
                    </div>
                    <div className='text-end mt-3'>
                        Visit an Apple Store <br />
                        <a href="" style={{textDecoration:'none'}}>Find one near you </a>
                    </div>
                </Col>
                <div className='d-flex gadgetrow' style={{marginTop:'90px'}}>
                        <figure className=''>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666" alt="" style={{height:'80px'}} />
                            <figcaption>Mac</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1692971740071" alt="" style={{height:'80px'}} />
                            <figcaption>iPhone</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" alt="" style={{height:'80px'}} />
                            <figcaption>iPad</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1693703814407" alt="" style={{height:'80px'}} />
                            <figcaption>Apple Watch</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" alt="" style={{height:'80px'}} />
                            <figcaption>AirPods</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" alt="" style={{height:'80px'}} />
                            <figcaption>AirTag</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484" alt="" style={{height:'80px'}} />
                            <figcaption>Apple TV 4k</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654" alt="" style={{height:'80px'}} />
                            <figcaption>HomePod</figcaption></a>
                        </figure>
                        <figure className=' ms-3'>
                            <a href="" style={{textDecoration:'none', color:'black'}}><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952" alt="" style={{height:'80px'}} />
                            <figcaption>Accessories</figcaption></a>
                        </figure>
                    </div>
            </Row>
        </div>
    </>
  )
}

export default Latest