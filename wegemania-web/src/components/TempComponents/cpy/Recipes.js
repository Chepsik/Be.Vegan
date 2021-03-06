import React, { useContext, useState } from "react";
import ProductImage from "../../images/product.jpg";
import { NewLoginInfo } from "../../context/LoginInfo";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
  PreparingMethod,
  RatingComponent,
  RatingHeader
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import DinnerImage from "../../images/dinner.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";
import "../../styles/MenuLoginStyle.css";
import ReactStars from "react-stars";
import { Redirect } from "react-router-dom";
import {
  HeaderRecipeContainer,
  RecipeTimeContainer,
  HeaderRecipeText,
  RecipeTime,
  IngredientsList,
  IngredientsItem,
  PreparationItem,
  RecipeImage,
  RateContainer,
  RateHeader,
  RateStars
} from "../../styles/RecipeStyle";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
const Recipes = () => {
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div>
            <SearchInput
              type="text"
              id="ajax"
              list="json-datalist"
              placeholder="Wprowadź nazwę produktu"
            />
            <datalist id="json-datalist">
              <option value="HTML" />
              <option value="CSS" />
              <option value="JavaScript" />
              <option value="Java" />
              <option value="Ruby" />
              <option value="PHP" />
              <option value="Go" />
              <option value="Erlang" />
              <option value="Python" />
              <option value="C" />
              <option value="C#" />
              <option value="C++" />
            </datalist>
          </div>
          <SearchButton>Wyszukaj</SearchButton>
          <SearchButton to="/addrecipe">Dodaj przepis</SearchButton>
        </SearchPanel>
        <OrderedList>
          <UnorderedList>
            <HeaderRecipeContainer>
              <HeaderRecipeText>ZUPA KREM Z TOPINAMBURU</HeaderRecipeText>
            </HeaderRecipeContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
                </Item>
                <IngredientsList>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                </IngredientsList>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RecipeImage src={DinnerImage} />
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
          <UnorderedList>
            <HeaderRecipeContainer>
              <HeaderRecipeText>ZUPA KREM Z TOPINAMBURU</HeaderRecipeText>
            </HeaderRecipeContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
                </Item>
                <IngredientsList>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                </IngredientsList>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RecipeImage src={DinnerImage} />
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
        </OrderedList>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Recipes;
