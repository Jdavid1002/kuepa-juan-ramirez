import React from 'react';
import ListIcons from '../../assets/ListIcons';


const HeaderContent = () => {

  const date = new Date().toISOString().split('T')[0];

  return (
    <div className='ContentHeader' >
      <div className='ContentHeader_containerInputs' >
        <input 
          type="text" 
          className='ContentHeader_containerInputs_input'
          placeholder='🔎 Search'  
        />
        <ListIcons
          name='filter'
        />
      </div>
      <div className="ContentHeader_containerInputs_select" >
        <input 
          type="date"
          defaultValue={date}
          className='ContentHeader_containerInputs_input'
        />
      </div>
    </div>
  );
}
 
export default HeaderContent;