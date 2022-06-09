import React from 'react'
import CallSchedule from './CallSchedule';
import GroupGoals from './GroupGoals';
import HeaderContent from './HeaderContent';
import PlanToday from './planToday';
import HelloUser from './HelloUser';

import './index.css';
import { useSelector } from 'react-redux';


const Content = () => {

  const user = useSelector(state => state.user.user);
  console.log(user);

  return (
    <div className='Content' >
      <HeaderContent />
      <h1 className='Content_Title' > Hola, {user?.profile?.name} </h1>
      <div className='Content__Container' >
        <HelloUser />
        <GroupGoals />
      </div>
      <div className='Content__Container'  >
        <CallSchedule />
        <PlanToday />
      </div>

    </div>
  );
}
 
export default Content;