import React from 'react';
import ListIcons from '../../assets/ListIcons';
import { useDispatch } from 'react-redux';

const HeaderContent = () => {

  const date = new Date().toISOString().split('T')[0];
  const dispatch = useDispatch();

  const updateSearchUsers = (e) => {
    dispatch({
      type: 'SEARCH_USER',
      payload: e.target.value,
    });
  };

  return (
    <div className='ContentHeader' >
      <div className='ContentHeader_containerInputs' >
        <input 
          type="text" 
          className='ContentHeader_containerInputs_input'
          placeholder='🔎 Search'  
          onChange={(e) => updateSearchUsers(e)}
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