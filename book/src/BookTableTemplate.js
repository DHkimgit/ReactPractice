import React from 'react';
import './BookTableTemplate.scss'

const BookTable = () => {
    return(
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th class='ID'>ID</th>
                        <th class='bookname'>제목</th>
                        <th class='writer'>작가</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default BookTable;
