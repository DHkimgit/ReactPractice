import React from 'react';
import './BookManagementTemplate.scss'
import BookInsert from './BookInsert';
import MomentDateChage from './CurrentTime';

const BookManagementTemplate = () => {
    return (
        <div className='BookManagementTemplate'>
            <div className='system-title'>장서 관리 시스템</div>
            <div className='current-time'>현재 시각</div>
            
            <div className='content'><BookInsert/></div>
            <MomentDateChage />
        </div>
    )
}
export default BookManagementTemplate;