import React, { useContext, useState, useEffect } from "react";
import Contents from "./Contents";
import {
  Container,
  HelloMessage,
  UnorderedListProfile,
  UserProfileItem,
  UserProfileItemRow,
  UnorderedFlexList,
  EditProfileButton,
  UserName,
  Header
} from "../../styles/UserProfile";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  UnorderedList,
  ColumnContainer,
  BorderText,
  Image,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer
} from "../../styles/WallStyle";
import PostImage from "../../images/postimage.jpg";
import axios from "axios";
import { NewLoginInfo } from "../../context/LoginInfo";
const ActivityText = props => {
  let temp;
  if (props.activity == 0) {
    temp =
      "Brak aktywności, nie wykonuje żadnej aktywności sportowej, pracuje w pracy na stanowisku siedzącym, dojeżdżam do niej samochodem";
  } else if (props.activity == 1) {
    temp =
      "Mała aktywność, aktywności sportowe zdarzają się bardzo rzadko, do pracy chodzę pieszo, w pracy wykonuję lekką aktywność fizyczną";
  } else if (props.activity == 2) {
    temp =
      "Średnia aktywność, aktywność sportowa co najmniej raz w tygodniu, staram się być aktywnym przy codziennych obowiązkach (praca, sklep), w pracy wykonuje lekką aktywność fizyczną,";
  } else if (props.activity == 3) {
    temp =
      "Duża aktywność, aktywność sportowa co najmniej 3 razy w tygodniu, aktywny przy codziennych obowiązkach, w pracy przerwy na rozciąganie i rozgrzewanie ciała";
  } else if (props.activity == 4) {
    temp =
      "Bardzo duża aktywność, aktywność sportowa codziennie, aktywny przy każdej możliwej okazji, w trakcie pracy aktywny lub robi przerwy na aktywność fizyczną";
  }
  return <p>{temp}</p>;
};
const Users = props => {
  const user = useContext(NewLoginInfo);
  const [userData, setUserData] = useState();
  let request;
  useEffect(() => {
    if (user.userInfo.id == props.match.params.id) {
      request = "https://veggiesapp.herokuapp.com/me/";
    } else {
      request = `https://veggiesapp.herokuapp.com/users/${props.match.params.id}`;
    }
    const fetchData = async () => {
      const result = await axios.get(request, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: `Token ${user.userInfo.token}`
        }
      });
      console.log(result.data);
      setUserData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ background: "rgba(255,255,255,0.7)" }}>
      {userData && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              "align-items": "center",
              margin: "3% 0 0 0"
            }}
          >
            <Header>
              <UserName
                style={{
                  "border-radius": "20px",
                  "font-size": "20px",
                  padding: "10%"
                }}
              >
                {userData.username}
              </UserName>
            </Header>

            {props.match.params.id == user.userInfo.id && (
              <EditProfileButton
                style={{ "font-size": "20px", "white-space": "nowrap" }}
                to={`/edituser/${user.userInfo.id}`}
              >
                Edytuj użytkownika
              </EditProfileButton>
            )}
          </div>
          <UnorderedListProfile style={{ border: "none" }}>
            {props.match.params.id == user.userInfo.id && (
              <UnorderedFlexList
                style={{ border: "none", background: "rgba(255,255,255,0.8)" }}
              >
                <UserProfileItemRow>
                  <BorderText>Adres e-mail:</BorderText>{" "}
                  {userData.email || "nie podano"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Wzrost:</BorderText>{" "}
                  {(userData.height || "nie podano") + " cm"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Wiek:</BorderText> {userData.age || "nie podano"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Waga:</BorderText>
                  {userData.weight || "nie podano"}
                </UserProfileItemRow>
                {userData.activity ? (
                  <UserProfileItemRow>
                    <BorderText>Aktywność:</BorderText>
                    <ActivityText activity={userData.activity} />
                    {/*<ProgressBar striped variant="success" now={60} />{*/}
                  </UserProfileItemRow>
                ) : (
                  <UserProfileItemRow>
                    <BorderText>Aktywność:</BorderText>
                    Nie podano.
                  </UserProfileItemRow>
                )}
              </UnorderedFlexList>
            )}
          </UnorderedListProfile>
          <h1>Twoje aktywności:</h1>
          <Contents />
        </div>
      )}
    </Container>
  );
};

export default Users;