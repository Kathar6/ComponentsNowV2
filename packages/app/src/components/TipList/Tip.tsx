import styled from "styled-components";

const Tip = styled.div`

  @keyframes textTipOn {
    0% {
      max-width: 0px;
      opacity: 0;
    }
    20% {opacity: 0;}
    90% {max-width: calc(12.5rem - 2.25rem);}
    100% {opacity: 1;}
  }

  @keyframes tipOn {
    0% {
      padding: 0;
      max-width: 3.75rem; 
    }

    100% {
      padding: 0 0.5rem;
      max-width: 12.5rem;
    }
  }

  display: flex;
  min-width: 3.75rem;
  max-width: 3.75rem;
  height: 3.75rem;
  cursor: pointer;
  margin: 0 1.25rem;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 16px 0px #00000030;

  span {
    margin-left: 0.313rem;
    font-size: 1.2rem;
  }

  svg {
    min-width: 2.25rem;
    min-height: 2.25rem;
    color: #464555;
  }
  
  &:hover {
    animation: tipOn 1s forwards;
    span {
      animation: textTipOn 1s forwards;
    }
  }

  &:focus {
    background-color: #eee;
  }

`
export default Tip