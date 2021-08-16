import styled from 'styled-components';

const DashboardWrapper = styled.div`
  & {
    display: flex;
    .right {
      flex: 1;
      .content {
      }
    }
    @media only screen and (max-width: 600px) {
      .content {
        max-width: 500px;
        overflow-x: auto;
      }
    }
  }
`;
export default DashboardWrapper;
