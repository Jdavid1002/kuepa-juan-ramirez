import React from 'react';
import ListIcons from '../../assets/ListIcons';


const ContainerInfoToday = ({
  background,
  color
}) => {
  return (
    <div className='ContainerPlanToday_containerItems' >
      <div className='ContainerPlanToday_containerItems_containerColor' style={{background : background}} >
        <div className='ContainerPlanToday_containerItems_containerColor_circle' style={{color : color}} >
          <h1> 30 </h1>
        </div>
      </div>

      <div className='ContainerPlanToday_containerItems_containerText' >
        <p> Leads de primer contacto. </p>
        <div className='ContainerPlanToday_containerItems_containerText_containerIconsAndText' >
          <ListIcons name='call' />
          <p className='ContainerPlanToday_containerItems_containerText_containerIconsAndText_text' > 15 </p>
        </div>
        <div className='ContainerPlanToday_containerItems_containerText_containerIconsAndText' >
          <ListIcons name='Message' />
          <p className='ContainerPlanToday_containerItems_containerText_containerIconsAndText_text' > 15 </p>
        </div>
      </div>
    </div>
  );
}
 
export default ContainerInfoToday;