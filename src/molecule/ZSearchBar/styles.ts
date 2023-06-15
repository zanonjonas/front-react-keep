import styled from 'styled-components'

export const SearchInputWrap = styled.div`
  background-color: var(--light-gray);
  height: 48px;
  border-radius: 10px;
  display: flex;
  flex: 1 1 auto;
  max-width: 720px;

  &:focus-within {
    background-color: white;
    border: 1px solid transparent;
    box-shadow: 0 1px 1px 0 rgba(65,69,73,.3),0 1px 3px 1px rgba(65,69,73,.15);
  }
  
`
export const SearchInput = styled.input`
  height: 24px;
  padding-top: 11px;
  padding-bottom: 11px;
  background-color: rgba(0,0,0,0);
  border-width: 0px;
  width: 100%;
  flex: 1;

  &:focus {
    outline: none;
  }
  
`



