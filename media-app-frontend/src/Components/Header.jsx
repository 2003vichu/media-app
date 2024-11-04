import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/ec/2f/53/ec2f53237973f53d2d81adba3b4d74d6.png'
              height='30'
              alt=''
              loading='lazy'
            />
            media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  )
}

export default Header