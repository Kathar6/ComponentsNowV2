import styled, {css} from "styled-components"

export const CardList = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: 90vw;
  padding: .5rem;
  overflow: hidden;
  &.overflow {
    justify-content: flex-start;
  }
  .card-wrapper {
    position: relative;
    min-width: 14rem;
    min-height: 20rem;
  }
`

export const Card = styled.div`
  top: 0;
  left: 0;
  gap: 0.313rem;
  display: flex;
  min-width: 14rem;
  max-width: 14rem;
  cursor: pointer;
  padding: 0.625rem;
  position: absolute;
  min-height: 15.625rem;
  border-radius: 0.5rem;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #00000030;

  img {
    width: fit-content;
    max-width: 100%;
    height: fit-content;
    max-height: 12.5rem;
  }

  .card-previous-value {
    font-size: 0;
    text-decoration: line-through;
    color: var(--chakra-colors-gray-500);
    transition: font-size .2s ease-in;
  }

  &:hover {
    .card-previous-value {
      font-size: var(--chakra-fontSizes-md);
    }
  }

`

export const CircleButton = styled.div`
  display: flex;
  min-width: 2.571rem;
  max-width: 2.571rem;
  height: 2.571rem;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 50px;
  align-items: center;
  color: #464555;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 16px 0px #00000030;
`