import React from 'react'
import { Link } from 'react-router'
import { URL_ROOT } from 'endpoint'

const NavbarBrandDropdown = () => (
  <ul id="sbox-brand-dropdown" className="dropdown-content">
    <li><a href="#!">Nike</a></li>
    <li><a href="#!">Vans</a></li>
    <li><a href="#!">Converse</a></li>
    <li><a href="#!">Allen Edmonds</a></li>
  </ul>
)

const NavbarShopDropdown = () => (
  <ul id="sbox-shop-dropdown" className="dropdown-content">
    <li><Link to={`${URL_ROOT}/shop/feature`}>Feature</Link></li>
    <li><Link to={`${URL_ROOT}/shop/bestseller`}>Best Seller</Link></li>
    <li className="divider"></li>
    <li><Link to={`${URL_ROOT}/shop`}>Shop</Link></li>
  </ul>
)


const showDropdownByRole = (Role) => {
  if(Role === 'employee') {
    return (
      <div>
        <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
        <li><Link to={`${URL_ROOT}/manage`}>Manage Shop</Link></li>
        <li className="divider"></li>
        <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
      </div>
    )
  }
  else if(Role === 'customer') {
    return (
      <div>
        <li><Link to={`${URL_ROOT}/profile`}>Profile</Link></li>
        <li className="divider"></li>
        <li><Link to={`${URL_ROOT}/logout`}>Logout</Link></li>
      </div>
    )
  }
  else {
    return (
      <div>
        <li><Link to={`${URL_ROOT}/login`}>Login</Link></li>
        <li><Link to={`${URL_ROOT}/register`}>Register</Link></li>
      </div>
    )
  }
}

const NavbarUserDropdown = ({Role}) => (
  <ul id="sbox-user-dropdown" className="dropdown-content">
    {showDropdownByRole(Role)}
  </ul>
)

const NavbarDropdown = ({Role}) => (
  <div>
    <NavbarBrandDropdown />
    <NavbarShopDropdown />
    <NavbarUserDropdown
      Role={Role}/>
    {/* <NavbarCustomerDropdown />
    <NavbarEmployeeDropdown /> */}
  </div>
)

export default NavbarDropdown
