import React from 'react'
import { useSelector } from 'react-redux';
import ListIcons from '../../assets/ListIcons';

const CallSchedule = () => {
  const users = useSelector(state => state.user.users);

  return (
    <div className='ContainerSchedule' >
      <h2 className='ContainerSchedule_tittle' > Conexiones de agenda para hoy.</h2>
      {users.map((user, index) => {
        if(index < 5){
          return (
            <div
              key={index}
              className="ContainerSchedule_containerItems"
            >
              <div  className={user.plus ? 'ContainerSchedule_containerItems_lineOrange' : 'ContainerSchedule_containerItems_linePink' } ></div>

              <div className='ContainerSchedule_containerItems_name' >
                <p> {user.name} </p>
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