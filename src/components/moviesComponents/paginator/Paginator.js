import React from 'react'
import ReactPaginate from 'react-paginate'
import './Paginator.css'

function Paginator(props) {

    const handleClick = (page)=>{
        console.log(page.selected+1);
        props.changePage(page.selected+1);
    }

    return (
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={500}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handleClick}
            containerClassName={"Paginator"}
            pageLinkClassName={"page-linkm"}
            previousClassName={"prev"}
            previousLinkClassName={"page-linkm"}
            nextClassName={"next"}
            nextLinkClassName={"page-linkm"}
            breakClassName={"break"}
            breakLinkClassName={"break-linkm"}
            activeClassName={"activem"}
        />
    )
}

export default Paginator
