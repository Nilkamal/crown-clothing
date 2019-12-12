import React from "react";
import { withRouter } from "react-router-dom";


import {
  MenuItemContainer,
  MenuItemBackgroundImageContainer,
  ContentContainer,
  ContentTitleContainer,
  ContentSubTitleContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemBackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer>
      <ContentTitleContainer>{title.toUpperCase()}</ContentTitleContainer>
      <ContentSubTitleContainer className="subtitle">SHOP NOW</ContentSubTitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
