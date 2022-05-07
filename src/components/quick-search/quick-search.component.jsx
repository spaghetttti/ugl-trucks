import React from 'react';
import searchLogo from '../../assets/icons8-search.svg';
import './quick-search.styles.scss';

const QuickSearch  = ({setSearch}) => {
  
  return(
    <div className="quick_search">
    <h3>Quick Search</h3>
    <div className="quick_search__input">
      <form role="search">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="search"
          placeholder="enter keywords"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit" className='button-disable' >
          <p className='search-logo'  ><img src={searchLogo} alt=''/></p>
        </button>
      </form>
    </div>
  </div>
  )
}

export default QuickSearch;