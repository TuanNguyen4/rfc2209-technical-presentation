import React from 'react'

const Search = ({ image, setImage }) => {

  return (
    <>
      <label className="search-label" htmlFor='search-image'></label>
      <input
        type='text'
        id='search-image'
        placeholder='Insert url of image'
        value={image} onChange={(e) => setImage(e.target.value)} autoComplete='off'>
      </input>
    </>
  )
}
export default Search