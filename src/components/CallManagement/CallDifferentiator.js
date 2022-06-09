import React, { useEffect, useState } from 'react';
import CallManagement from './callManagement';


const CallDifferentiator = () => {

  const [width, setWidth] = useState(0);
  const [SidebarResponsive, setSidebarResponsive] = useState(true);


  useEffect(() => {
    if (width >= 770) {
      setSidebarResponsive(false);
    }else{
      setSidebarResponsive(true);
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


  if(!SidebarResponsive){
    return <CallManagement />
  }else{
    return null;
  }

}
 
export default CallDifferentiator;