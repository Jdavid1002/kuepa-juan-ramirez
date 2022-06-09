import React,{useEffect} from 'react';
import { Droppable, DragDropContext} from 'react-beautiful-dnd';
import { useDispatch , useSelector} from 'react-redux';
import { getUser, getUsers } from '../../redux/actions';
import CardCall from './CardCall';

import './index.css';

const CallManagement = ({
  useResponsive= false,
  onClose
}) => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  const onDragEnd =(result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      users,
      result.source.index,
      result.destination.index
    );

    const newUsers = items.map((user, index) => {
      return{
        ...user,
        orderRandom : index
      };
    });
    
    dispatch({
      type: "GET_USERS",
      payload: newUsers,
    });


  }

  useEffect(() => {
    dispatch(getUsers());
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(users.length > 0){
      const randomPosition = Math.floor((Math.random() * ((users.length - 1) - 0 + 1)) + 0)
      const user = users[randomPosition];
      dispatch(getUser(user.account_id));
    }
    //eslint-disable-next-line
  }, [users]);

  return (
    <div className={useResponsive ? "Container_Menu__content" : ""} onClick={() => useResponsive ? onClose() : null } >
      <div className='CallContainer' >
        <div className='CallContainer_line'></div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {provided => (
              <div 
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='CallContainer_Contacts'
              >
                {users.map((user, index) => {
                  if(index % 2 === 0){
                    return <CardCall  user={user} index={index} from='FACEBOOK' key={index} />
                  }else{
                    return <CardCall  user={user} index={index} from='WHATSAPP' key={index} />
                  }
                })}
                {provided.placeholder}
              </div>
            )}

          </Droppable>
        </DragDropContext>


      </div>
    </div>
  );

}
 
export default CallManagement;