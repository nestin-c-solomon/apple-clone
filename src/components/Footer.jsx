import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className='container' style={{marginTop:'100px'}}>
            <h3 className='fw-bold'>Quick Links</h3>
            <div className='d-flex mt-4'>
                <button style={{backgroundColor:'rgb(0 0 0 / 8%)'}} className='btn rounded-pill'>Order Status</button>
                <button style={{backgroundColor:'rgb(0 0 0 / 8%)'}} className='btn rounded-pill ms-3'>Shopping Help</button>
                <button style={{backgroundColor:'rgb(0 0 0 / 8%)'}} className='btn rounded-pill ms-3'>Your Saves</button>
            </div>

            <Row className='mt-5'>
                <Col lg={3}>
                </Col>
                <Col lg={9} style={{color:'#6e6e73',fontSize:'14px'}}>
                    <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
                    <p>Representative example: <br />Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15% pa. Total interest paid to bank: ₹3532.00.</p>
                    <p>No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.</p>
                    <p>* Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.</p>
                    <p>⁺⁺ New subscribers only. Plan automatically renews at your region’s price per month until cancelled. Restrictions and other terms apply. Only one offer per Apple ID, regardless of the number of devices you purchase. Offer cannot be combined with other free trials or offers for Apple Music. With eligible audio devices: Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer is valid for 3 months after eligible device pairing. No purchase necessary for current owners of eligible audio devices. With the purchase and activation of a new iPhone: Offer is available for a limited time to new subscribers who purchase and activate a new iPhone. Offer is valid for 3 months after eligible iPhone activation.</p>
                    <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>

                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg={3}></Col>
                <Col lg={9}>
                    <p><i class="fa-brands fa-apple me-3"></i> Apple store online</p>
                </Col>
            </Row>

            <Row>
                <Col lg={3}></Col>
                <Col lg={9}>
                    <Row style={{fontSize:'14px'}}>
                        <Col lg={3} xs={6} sm={6} className='d-flex flex-column'>
                            <p>Shop and Learn</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Store</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Mac</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>iPad</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>iPhone</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Watch</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>AirPods</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Gift Cards</a>
                            <p className='mt-4'>Apple Wallet</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Wallet</a>
                            
                        </Col>
                        <Col lg={3} xs={6} sm={6} className='d-flex flex-column'>
                            <p>Account</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Manage Your Apple ID</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Store Account</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>iCloud.com</a>

                            <p className='mt-4'>Entertainment</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple One</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple TV+</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Music</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Books</a>
                        </Col>
                        <Col lg={3} xs={6} sm={6} className='d-flex flex-column'>
                            <p>Apple Store</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Find a store</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Genius store</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Today at apple</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Ways to buy</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Order Status</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Shopping Help</a>
                        </Col>

                        <Col lg={3} xs={6} sm={6} className='d-flex flex-column'>
                            <p>Account</p>
                            <a href="" className='links'  style={{color:'#6e6e73'}}>Manage Your Apple ID</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Store Account</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>iCloud.com</a>

                            <p className='mt-4'>Entertainment</p>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple One</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple TV+</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Music</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Apple Books</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Order Status</a>
                            <a href="" className='links' style={{color:'#6e6e73'}}>Shopping Help</a>
                        </Col>
                    </Row>

                    <hr />
                    <div style={{fontSize:'14px',color:'#6e6e73'}} className='d-flex justify-content-between' >
                        <div className=' d-flex'>
                            <p>Copyright © 2023 Apple Inc. All rights reserved</p>
                            <a href="" className='links ms-3' style={{color:'#6e6e73'}}>Privacy Policy</a>
                            <a href="" className='links ms-3' style={{color:'#6e6e73'}}>Terms of use</a>
                            <a href="" className='links ms-3' style={{color:'#6e6e73'}}>Sales Policy</a>
                        </div>
                        <div>
                            <p>India</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    </>
  )
}

export default Footer