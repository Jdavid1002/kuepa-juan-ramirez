import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ListIcons from '../../assets/ListIcons';
import CallManagement from '../CallManagement/callManagement';
import Navbar from './Navbar';


const NavbarResponsive = ({
  buttomHeaderNavbar,
  buttonFooterNavbar
}) => {

  const [useNavbar, setUseNavbar] = useState(false);
  const [useCallManagment, setuseCallManagment] = useState(false);


  if(useNavbar){
    return <Navbar  buttomHeaderNavbar={buttomHeaderNavbar} buttonFooterNavbar={buttonFooterNavbar} useResponsive={true} onClose={() => setUseNavbar(false)} />
  }else if(useCallManagment){
    return <CallManagement useResponsive={true} onClose={() => setuseCallManagment(false)} />
  }else{
    return (
      <nav className="Menu__content_responsive">
        <div className="Menu__content_logo">
          <Link to="/kuepa-juan-ramirez/">
            <img
              className="Menu__content_img"
              src="https://s.tmimgcdn.com/scr/1200x627/200400/diseno-de-logotipo-de-empresa-financiera-de-impuestos-contables_200426-original.jpg"
              alt="Logo Kuepa"
            />
          </Link>
        </div>
        <div className="Menu__content_logo">
          <div className='Menu__content_logo_navbar' onClick={() => setUseNavbar(true) } >
            <ListIcons
              name="navbar"
            />
          </div>
        </div>
        <div className="Menu__content_logo">
          <div className='Menu__content_logo_navbar' onClick={() => setuseCallManagment(true) } >
            <ListIcons
              name="call"
            />
          </div>
        </div>
  
      </nav>
    );
  }
}
 
export default NavbarResponsive;