import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
        <div className='container'>
          <Nav className="justify-content-center mt-2" style={{fontSize:'13px'}} activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home" style={{color:'black'}}><i class="fa-brands fa-apple"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" style={{color:'#6e6e73'}}>Store</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>Mac</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>iPad</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>iPhone</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>Watch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>AirPods</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>TV & Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>Entertainment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>Accessories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}>Support</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{color:'#6e6e73'}}><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className='p-3' style={{backgroundColor:'white',fontSize:'14px'}}>
        <p className='text-center'>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.</p>
        <p className='text-center'>Plus No Cost EMI from most leading banks. <span><a href="" style={{textDecoration:'none'}}>See offers</a></span>  </p>
      </div>
    </>
  )
}

export default Header