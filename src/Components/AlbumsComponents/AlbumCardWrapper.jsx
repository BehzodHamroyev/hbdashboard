import styled from "styled-components";

const AlbumCardWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    padding: 40px 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 5px 0px #c9c7c776;
    .iconColor {
      color: ${(props) => props.iconColor};
    }
  }
`;
export default AlbumCardWrapper;