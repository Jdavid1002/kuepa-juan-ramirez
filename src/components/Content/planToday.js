import React from 'react';
import ListIcons from '../../assets/ListIcons';
import ContainerInfoToday from './ContainerInfoToday';

const PlanToday = () => {
  return (
    <div className='ContainerPlanToday' >
      <div className='ContainerPlanToday_containerText' >
        <h1> Tu plan de hoy </h1>
        <div className='ContainerPlanToday_containerText' >
          <p className='ContainerPlanToday_containerText_text' > Ir a gestión de Llamadas </p>
          <ListIcons name='arrow' />
        </div>
      </div>
      <div className='ContainerPlanToday_container_ItemsGrid' >
        <ContainerInfoToday 
          background={'linear-gradient(180deg, rgba(172,132,246,1) 0%, rgba(151,158,248,1) 35%, rgba(136,178,250,1) 100%)'}
          color='rgba(136,178,250,1)'
        />
        <ContainerInfoToday 
          background={'linear-gradient(180deg, rgba(4,125,147,1) 0%, rgba(63,191,181,1) 35%, rgba(114,248,210,1) 100%)'} 
          color='rgba(114,248,210,1)'
        />
        <ContainerInfoToday 
        background={'linear-gradient(180deg, rgba(179,69,145,1) 0%, rgba(209,81,133,1) 35%, rgba(237,93,122,1) 100%)'}
        color='rgba(237,93,122,1)'
        />
      </div>
    </div>
  );
}
 
export default PlanToday;