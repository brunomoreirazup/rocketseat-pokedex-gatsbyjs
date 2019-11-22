import React from 'react'
import {
  SearchContainer,
  SearchInput,
} from './styled'


const Search = (props) => {
  const { placeholder, value, onChange, } = props
  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
      />
    </SearchContainer>
  )
}

export default Search