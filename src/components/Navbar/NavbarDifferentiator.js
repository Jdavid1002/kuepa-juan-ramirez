import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import NavbarResponsive from './NavbarResponsive';


const NavbarDifferentiator = () => {

  const [navbarResponsive, setNavbarResponsive] = useState(true);
  const [width, setWidth] = useState(0)
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    if (width >= 770) {
      setNavbarResponsive(false);
    }else{
      setNavbarResponsive(true);
    }
    //eslint-disable-next-line
  }, [width])


  useEffect(() => {
    //Esta es una función para saber el ancho de la pantalla
    const changeViewResponsive = () => {
      const widthWindow = window.innerWidth;
      setWidth(widthWindow);
    };
    changeViewResponsive();
    window.addEventListener("resize", changeViewResponsive);
    return () => {
      window.removeEventListener("resize", changeViewResponsive)
    }
  }, [width]);


  const buttomHeaderNavbar = [
    {
      icon: "Home",
      order: 1,
      link : "/Dashboard"
    },
    {
      icon: "Clipboard",
      order: 2,
      link : "/Dashboard"
    },
    {
      icon: "Layout",
      order: 3,
      link : "/Dashboard"
    },
  ];

  const buttonFooterNavbar = [
    {
      profile: user?.profile?.avatar,
      name: "Profile",
      order: 2,
      link : "/Dashboard"
    },
    {
      icon : "help",
      name: "Help",
      order: 1,
      link : "/Dashboard"
    }
  ]


  if(!navbarResponsive){
    return <Navbar buttomHeaderNavbar={buttomHeaderNavbar} buttonFooterNavbar={buttonFooterNavbar} />
  }else{
    return <NavbarResponsive buttomHeaderNavbar={buttomHeaderNavbar} buttonFooterNavbar={buttonFooterNavbar} />
  }

}
 
export default NavbarDifferentiator;