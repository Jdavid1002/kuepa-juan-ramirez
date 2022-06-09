import React from 'react'


const HelloUser = () => {
  return (
    <div className='ContainerUser' >
      <div className='ContainerUser_percentageContainer' >
        <div className='ContainerUser_percentageContainer_circle' >
          <h2> 100% </h2>
        </div>
      </div>
      <div className='ContainerUser_optionsContainer' >
        <div className='ContainerUser_optionsContainer_option' >
          <p className='ContainerUser_options_option_text' > Leads Obtenidos </p>
          <p className='ContainerUser_options_option_number' > 50/100 </p>
        </div>
        <div className='ContainerUser_optionsContainer_option' >
          <p className='ContainerUser_options_option_text' > Matriculas finalizadas </p>
          <p className='ContainerUser_options_option_number' > 10/20 </p>
        </div>
      </div>
      <div className='ContainerUser_optionsContainer' >
        <div className='ContainerUser_optionsContainer_option' >
          <p className='ContainerUser_options_option_text' > Cola de llamados</p>
          <p className='ContainerUser_options_option_number' > 50/100 </p>
        </div>
      </div>
    </div>
  );
}
 
export default HelloUser;