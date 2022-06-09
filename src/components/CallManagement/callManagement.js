import React,{useEffect} from 'react';
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
        <div className='CallContainer_Contacts'>
          {users.map((user, index) => {
            if(index % 2 === 0){
              return <CardCall  user={user} index={index} from='FACEBOOK' key={index} />
            }else{
              return <CardCall  user={user} index={index} from='WHATSAPP' key={index} />
            }
          })}
        </div>
      </div>
    </div>
  );

}
 
export default CallManagement;