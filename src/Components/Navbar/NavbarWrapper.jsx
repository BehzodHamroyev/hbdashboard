import styled from 'styled-components';

const NavbarWrapper = styled.div`
  & {
    z-index:2000;
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    .logo {
      height: 80px;
    }
  }
`;
export default NavbarWrapper;
