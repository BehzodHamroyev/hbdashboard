import styled from 'styled-components';

const SideBarWrapper = styled.div`
  & {
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888 !important;
      border-radius: 5px !important;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555 !important;
    }
    background-color: #94929281;
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    position: sticky;
    top: 0;
    z-index: 2000;
    transition: all 1s linear;

    .active {
      background-color: #919eab6f;
      color: #00ab55 !important;
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .listItem {
        width: 100%;
        padding: 10px 40px;
        border-radius: 10px;
        text-align: center;
        margin-top: 40px;
        font-size: 20px;
        transition: all 0.2s linear;

        &:hover {
          background-color: #85888b8d;
          color: #ffffff !important;
        }
      }
    }
    .user {
      width: 600px;
      height: 30px;
      img.logo {
        width: 50px !important;
        border-radius: 50%;
      }
      .userName{
        color: #33c096;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    & {
      display: ${(props) => {
        return (props.sidebar && 'block') || 'none';
      }};
      position: absolute;
      height: 100vh;
      background-color: #e9e5e5dc;
      top: 0;
      transition: all linear 3s;
    }
  }
`;

export default SideBarWrapper;
