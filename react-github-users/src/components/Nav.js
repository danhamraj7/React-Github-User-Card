import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  background-color: rgba(45, 45, 45, 0.98);
  display: flex;
  z-index: 9999;
  width: 100%;
  flex-direction: column;
`;

const TopNavContent = styled.div`
  margin: 0 auto;
  height: 44px;
  max-width: 980px;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .apple-logo {
    width: 18px;
    height: 22px;
  }

  .search-logo {
    margin-top: 5px;
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 14px;
    &:hover {
      opacity: 0.65;
    }
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <NavWrapper>
        <TopNavContent>
          <a>Advanced React</a>

          <a>Class Components</a>

          <a>The React Lifecycle</a>
        </TopNavContent>
      </NavWrapper>
    );
  }
}

export default Nav;
