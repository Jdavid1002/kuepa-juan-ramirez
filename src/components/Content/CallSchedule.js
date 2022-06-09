import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ListIcons from '../../assets/ListIcons';

const CallSchedule = () => {
  const users = useSelector(state => state.user.users);
  const search = useSelector(state => state.user.search);
  const allUsers = useSelector(state => state.user.allUsers);
  const [UsersMap, setUsersMap] = useState([]);

  useEffect(() => {
    if(search.length > 0){
      const newUsersMap = allUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
      setUsersMap(newUsersMap);
    }else{
      setUsersMap(users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, users, allUsers])

  return (
    <div className='ContainerSchedule' >
      <h2 className='ContainerSchedule_tittle' > Conexiones de agenda para hoy.</h2>
      {UsersMap.map((user, index) => {
        if(index < 5){
          return (
            <div
              key={index}
              className="ContainerSchedule_containerItems"
            >
              <div  className={user.plus ? 'ContainerSchedule_containerItems_lineOrange' : 'ContainerSchedule_containerItems_linePink' } ></div>

              <div className='ContainerSchedule_containerItems_name' >
                <p> {user.name.length > 10 ? `${user.name.substr(0, 9)}...` : user.name } </p>
              </div>
              <div className='ContainerSchedule_containerItems_info' >
                <h3> Llamar </h3>
                <p className='ContainerSchedule_containerItems_info_text' > Descuento temporada </p>
              </div>
              <div  className={user.plus ? 'ContainerSchedule_containerItems_circleOrange' : 'ContainerSchedule_containerItems_circleGray' } ></div>
              <div className='ContainerSchedule_containerItems_containerIcons' >
                <ListIcons 
                  name="call"
                />
                <ListIcons 
                  name="Message"
                />
    
              </div>
            </div>
          )
        }else{
          return null;
        }
      })}
    </div>
  );
}
 
export default CallSchedule;