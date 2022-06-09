import React from 'react'

const CardCall = ({
  index,
  user,
  from
}) => {
  return (
    <div className='CallContainer_Contacts_user' key={index}>
      <div className='CallContainer_Contacts_user_header' >
        {from}
      </div>
      <div className='CallContainer_Contacts_user_name' >
        {user?.name}
      </div>
      <div className='CallContainer_Contacts_user_time' >
        {user?.orderRandom} ago.
      </div>
    </div>
  );
}
 
export default CardCall;