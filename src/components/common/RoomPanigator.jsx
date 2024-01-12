import React from 'react'

const RoomPanigator = ({currentPage, totalPages, onPageChange}) => {
    const pageNumbers = Array.from({length: totalPages}, (_,i) => i + 1);
  return (
    <nav>
        <ui className='pagination justify-content-center'>
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "actice" : ""}`}>
                    <button className='page-link' onClick={(e) => onPageChange(e)}>
                        {pageNumber}
                    </button>
                </li>
            ))}
        </ui>
    </nav>
  )
}

export default RoomPanigator