import ReactPaginate from 'react-paginate';
import "../css/Paginate.css";
const Paginate = ({pageCount, handlePageClick}) => {
    return ( 
        <div className='paginate d-flex justify-content-center'>
            <ReactPaginate
                breakLabel="..."
                previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </div>
     );
}

export default Paginate;