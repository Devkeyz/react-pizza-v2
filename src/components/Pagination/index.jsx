import React from 'react';
import ReactPaginate from 'react-paginate';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={<HiOutlineArrowRight />}
      previousLabel={<HiOutlineArrowLeft />}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
