import { users } from "../../temp/users";
import React from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  BoldItem,
  Item
} from "../../styles/GlobalStyle";
export const RecommendedTip = () => {
  return (
    <LocalContainer>
      <HeaderText
        style={{
          "text-align": "center",
          background: "#00a835",
          "border-radius": "20px",
          color: "white",
          padding: "1%",
          margin: "1% auto 1% auto"
        }}
      >
        Dzisiejsze Ciekawostki :
      </HeaderText>
      <UnorderedList>
        <BoldItem>Tytuł 1</BoldItem>
        <Item>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Item>
      </UnorderedList>
      <UnorderedList>
        <BoldItem>Tytuł 1</BoldItem>
        <Item>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Item>
      </UnorderedList>
    </LocalContainer>
  );
};
