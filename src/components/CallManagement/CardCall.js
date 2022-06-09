import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const CardCall = ({
  index,
  user,
  from
}) => {
  return (
    <Draggable draggableId={user.profileurl} index={index} key={user.profileurl}>
      {provided => (
        <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='CallContainer_Contacts_user' 
        >
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
      )}
    </Draggable>
  );
}
 
export default CardCall;