
import {  NavLink } from 'react-router-dom'

const Navbar = ({cardsfunc}) => {
  
  return (
    <div>

      <ul className='uldiv container-fluid text-decoration-none text-black fw-normal   navbar ' activeClassName="active">
        <li>
          <NavLink to="/" className="text-decoration-none text-black fw-normal navbar  navbar"
           activeClassName="active"
           onClick={()=>cardsfunc("all")}>All</NavLink>
           </li>
        <li>
          <NavLink to="/fullstack" className="text-decoration-none text-black fw-normal  navbar" 
          activeClassName="active"
          onClick={()=>cardsfunc("Fullstack")}>Full stack development</NavLink>
          </li>
        <li>
          <NavLink to="/datascience" className="text-decoration-none text-black fw-normal  navbar" 
          activeClassName="active"
          onClick={()=>cardsfunc("datasci")}>Data science</NavLink>
          </li>
        <li>
          <NavLink to="/cybersecurity" className="text-decoration-none  text-black fw-normal  navbar" 
          activeClassName="active"
          onClick={()=>cardsfunc("cybersec")}>Cyber security</NavLink>
          </li>
        <li>
          <NavLink to="/career" className="text-decoration-none text-black fw-normal  navbar" 
          activeClassName="active"
          onClick={()=>cardsfunc("career")}>Career</NavLink>
          </li>  
          </ul>
      <hr className='m-2 p-0'/>
    </div>
  )
}

export default Navbar