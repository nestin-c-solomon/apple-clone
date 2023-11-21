import React from 'react'
import './Gadgets.css'

function Gadgets() {
  return (
    
    <>
        <div className='container mt-3'>
            <h3 className='fw-bold'>The latest. <span style={{color:'#6e6e73'}}>Take a look at what’s new right now.</span></h3>

            <div className=' mt-4 d-flex latestrow'>
                <div className='latest position-relative rounded-4'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692719973220" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>IPHONE 15</p>
                    <h1 className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'35px' }}>Newphoria</h1>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'85px' }}>From ₹79900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'white', marginTop:'10px' }}>IPHONE 15 PRO</p>
                    <h1 className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'35px',color:'white' }}>Titanium</h1>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'85px',color:'white' }}>From ₹169900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-veteran-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1700069399720" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>PAYMENT OPTIONS</p>
                    <p className='position-absolute top-0 start-0 ms-3 fw-bold' style={{ marginTop:'35px' }}>Flexible ways to pay.Plus instant savings and No Cost EMI</p>
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1693501324197" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'white', marginTop:'10px' }}>APPLE WATCH SERIES 9</p>
                    <p className='position-absolute top-0 start-0 ms-3 fw-bold' style={{ marginTop:'35px',color:'white' }}>SMARTER.BRIGHTER.MIGHTIER</p>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'85px',color:'white' }}>From ₹79900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202310_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1696875268001" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{ marginTop:'10px' }}>IPAD</p>
                    <p className='position-absolute top-0 start-0 ms-3 fw-bold fs-4' style={{ marginTop:'35px' }}>LOVABLE. <br /> DRAWABLE</p>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'100px' }}>From ₹79900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202309_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1693861933617" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>IPHONE 15</p>
                    <h1 className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'35px' }}>Adventure</h1>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'85px' }}>From ₹79900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1683844828182" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>IPHONE 15</p>
                    <p className='position-absolute top-0 start-0 ms-3 fw-bold fs-5 ' style={{ marginTop:'35px', }}>Impressively Big <br /> Impressively Thin</p>
                    <p className='position-absolute top-0 start-0 ms-3 ' style={{ marginTop:'95px' }}>From ₹79900.00</p>
                    
                    {/* <p className='position-absolute top-0 start-0'>sssssssssssssssssssssssssssss</p> */}
                </div>

                
            </div>

            <h3 className='fw-bold' style={{marginTop:'100px'}}>Help is here.<span style={{color:'#6e6e73'}}>Whenever and however you need it</span></h3>

            <div className=' mt-4 d-flex latestrow'>
                <div className='latest position-relative rounded-4'>
                    <img className='rounded-4 h-100' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1684946879038" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>APPLE SPECIALIST</p>
                    <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold' style={{ marginTop:'35px' }}>Shop one on one with a specialist online</p>
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-business-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661285670376" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'white', marginTop:'10px' }}>IPHONE 15</p>
                    <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold' style={{ marginTop:'35px',color:'white' }}>From enterprise to small business, we'll work with you</p>
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4 h-100' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1697149577145" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-6' style={{color:'#6e6e73', marginTop:'10px' }}>TODAY AT APPLE</p>
                    <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold' style={{ marginTop:'35px' }}>Join free sessions at your Apple Store</p>
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4 h-100' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-50-personal-session-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630612234000" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold' style={{ marginTop:'15px' }}>Get to know your device with a free personal session</p>
                </div>

                <div className='latest position-relative rounded-4 ms-5'>
                    <img className='rounded-4 h-100' style={{width:'300px'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-support-app-202308_GEO_IN?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1691156993472" alt="" />
                    <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold' style={{ marginTop:'35px' }}>Need support? Our teams are here for you</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Gadgets