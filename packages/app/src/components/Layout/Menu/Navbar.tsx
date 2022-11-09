import styled from "styled-components";

const Navbar = styled.nav`
  gap: 1rem;
  max-width: 100vw;
  height: 5rem;
  display: flex;
  padding: 0 1rem;
  flex-direction: row;
  align-items: center !important;
  background-color: var(--chakra-colors-primary-500);

  & + div {
    overflow-y: auto;
    max-height: calc(100vh - 5rem);
  }
`

export default Navbar;