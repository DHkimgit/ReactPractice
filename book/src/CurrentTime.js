import React from 'react';
import Moment from 'react-moment';

const MomentDateChage = () => {
    //const nowTime = Date.now();
    // Sun Aug 23 2020 15:43:49 GMT+0900
    const dateToFormat = '12:59-0500';
    return <Moment>{dateToFormat}</Moment>
  }
  export default MomentDateChage;