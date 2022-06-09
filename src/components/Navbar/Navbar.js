import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import ListIcons from "../../assets/ListIcons";
import "./index.css";

const Navbar = ({
  buttomHeaderNavbar,
  buttonFooterNavbar,
  useResponsive = false,
  onClose
}) => {

  const history = useHistory();


  return (
    <div className={useResponsive ? "Container_Menu__content" : ""} onClick={() => useResponsive ? onClose() : null } >
      <nav className="Menu__content">
        <div className="Menu__page">
          <div className="Menu__content_logo">
            <Link to="/kuepa-juan-ramirez/Dashboard">
              <img
                className="Menu__content_img"
                src={"https://s.tmimgcdn.com/scr/1200x627/200400/diseno-de-logotipo-de-empresa-financiera-de-impuestos-contables_200426-original.jpg"}
                alt="Logo Kuepa"
              />
            </Link>
          </div>
          <div className="Item__menu">
            {buttomHeaderNavbar.map((item, index) => (
              <div
                className="Item__menu_icon"
                key={index}
                onClick={() =>  history.push(item.link)}
              >

                {item.icon && (
                  <div className="Item__menu_icon_svg">
                    <ListIcons name={item.icon} />
                  </div>
                )}

                {item.profile ? (
                  <div className="containerProgreesBar" >
                    <div className="containerUserData__containerImage" >
                      <img  className="containerImage__ImageNavbar" src={item.profile} alt="foto perfil usuario" />
                    </div>
                  </div>
                ):null}
              </div>
            ))}
          </div>
        </div>

        <div className="Menu__page__bottom">
          <div className="Item__menu">
            {buttonFooterNavbar.map((item, index) => (
              <div
                className="Item__menu_icon"
                key={index}
                onClick={() =>  history.push(item.link)}
              >

                {item.icon && (
                  <div className="Item__menu_icon_svg">
                    <ListIcons name={item.icon} />
                  </div>
                )}

                {item.profile ? (
                  <div className="containerProgreesBar" >
                    <div className="containerUserData__containerImage" >
                      <img  className="containerImage__ImageNavbar" src={item.profile} alt="foto perfil usuario" />
                    </div>
                  </div>
                ):null}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;