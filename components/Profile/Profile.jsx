import React from 'react';
import s from './Profile.module.css';
import Content from './Posts/Content';


const Profile = (props) => {
    return <div>
        <div className={s.content}>
            <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 ' />
          
            <post message='how are you'/>
             <post message=' you'/>
        </div>
        <Content/>
            
    </div>

};

export default Profile;