import React from 'react';

const GroupGoals = () => {
  return (
    <div className='ContainerGroupGoals' >
      <h2> Meta Grupal </h2>
      <div className='ContainerGroupGoals_container' >
        <div className='ContainerGroupGoals_container_text' >
          <p>Leads obtenidos</p>
          <p>200/400</p>
        </div>
        <div className='ContainerGroupGoals_container_lineContainer' >
          <hr className='ContainerGroupGoals_container_line line_pink' />
          <hr className='ContainerGroupGoals_container_line line_gray' />
        </div>
      </div>
      <div className='ContainerGroupGoals_container' >
        <div className='ContainerGroupGoals_container_text' >
          <p> Matriculas Realizadas </p>
          <p>50/100</p>
        </div>
        <div className='ContainerGroupGoals_container_lineContainer' >
          <hr className='ContainerGroupGoals_container_line line_pink' />
          <hr className='ContainerGroupGoals_container_line line_gray' />
        </div>
      </div>
    </div>
  );
}
 
export default GroupGoals;