import React from 'react'
import './AppleStore.css'

function AppleStore() {
    return (

        <>
            <div className='container' style={{ marginTop: '100px' }}>
                <h3 className='fw-bold' >The Apple Store difference.<span style={{ color: '#6e6e73' }}>Even more reasons to shop with us.</span></h3>

                <div className='mt-4 d-flex storerow p-5'>
                    <div style={{ width: '350px', height: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className='store rounded-4 shadow p-5'>
                        <p className='fw-bold text-primary'><i class="fa-solid fa-rotate fa-2x"></i></p>
                        <p className='fw-bold '>Exchange your smartphone,get ₹16000.00 - 648000.00 in credit towards a new one</p>
                    </div>

                    <div style={{ width: '350px', height: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className='store rounded-4  p-5 ms-5'>
                        <p className='fw-bold rainbow-text'><i class="fa-brands fa-apple fa-2x"></i></p>
                        <p className='fw-bold rainbow-text fs-4'>Customise your Mac</p>
                    </div>

                    <div style={{ width: '350px', height: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className='store rounded-4 shadow p-5 ms-5'>
                        <p className='fw-bold text-primary'><i class="fa-solid fa-wallet fa-2x"></i></p>
                        <p className='fw-bold'><span style={{ color: 'green' }}>Flexible ways to pay</span>. <br />Plus instant savings </p>
                    </div>

                    <div style={{ width: '350px', height: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', textAlign: 'justify' }} className='store rounded-4 shadow p-5 ms-5 mb-3'>
                        <p className='fw-bold text-success'><i class="fa-solid fa-truck fa-2x"></i></p>
                        <p className='fw-bold'>Enjoy free delivery, or easy pickup </p>
                    </div>
                </div>

                <div className='container' style={{ marginTop: '100px' }}>
                    <h3 className='fw-bold' >The Apple experience.<span style={{ color: '#6e6e73' }}>Do even more with Apple products and services.</span></h3>

                    <div className='mt-4 d-flex exprow p-5'>
                        <div className='latest position-relative rounded-4 ' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <img className='rounded-4 h-100 expitem' style={{ width: '390px' }} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696949431686" alt="" />
                            <p className='position-absolute top-0 start-0 ms-3 fs-6 p-2' style={{ color: 'white', marginTop: '10px' }}>APPLE TV+</p>
                            <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold p-2' style={{ marginTop: '35px',color:'white' }}>Get 3 months of Apple TV+ free when you buy an apple device.</p>
                        </div>

                        <div className='latest position-relative rounded-4 ms-5' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <img className='rounded-4 h-100 expitem' style={{ width: '390px' }} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375547000" alt="" />
                            <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold p-2' style={{ marginTop: '35px',color:'black' }}>Four Apple services. One easy subscription.</p>
                        </div>

                        <div className='latest position-relative rounded-4 ms-5' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <img className='rounded-4 h-100 expitem' style={{ width: '390px' }} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-applecare-202309?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1692730497948" alt="" />
                            <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold p-2' style={{ marginTop: '40px',color:'black' }}>We've got you covered.</p>
                            <p className='position-absolute top-0 start-0 ms-3 fs-6 p-2' style={{ color: 'black', marginTop: '85px' }}>AppleCare+ now comes with unlimited repairs for accidental damage protection.</p>
                            
                        </div>

                        <div className='latest position-relative rounded-4 ms-5' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <img className='rounded-4 h-100 expitem' style={{ width: '390px' }} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-homekit-202309_GEO_IN?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1693758287672" alt="" />
                            <p className='position-absolute top-0 start-0 ms-3 fs-6 p-2' style={{ color: '#6e6e73', marginTop: '10px' }}>Home</p>
                            <p className='position-absolute top-0 start-0 ms-3 fs-3 fw-bold p-2' style={{ marginTop: '35px',color:'black' }}>See how one app can control your entire home.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AppleStore