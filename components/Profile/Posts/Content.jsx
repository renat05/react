import React from 'react';
import s from './Content.module.css';


const Content = (props) => {
    return <div>
        Post
<div className={s.posts}>
{props.message}     
</div>

  <div className='item'>
  post 2
     </div>
</div>


};

export default Content;