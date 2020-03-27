import React, { useState, useEffect, useContext } from "react";
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
  TagContainer,
  TagItem,
  RatingComponent
} from "../../styles/WallStyle";
import {
  HeaderPostsContainer,
  HeaderPostsItem,
  HeaderPostsText,
  TagsPostsHeader,
  TagsPostsHeaderContainer,
  TagsPostsContainer,
  TagsItems,
  ImageForUpload
} from "../../styles/PostsWallStyle";
import PostImage from "../../images/postimage.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import {
  AddPostPageContainer,
  AddPostPageLink,
  SearchInput,
  SearchButton,
  SearchContainer
} from "../../styles/PostStyle";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import { NewNotifyContext } from "../../context/Notify";
const Post = props => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [post, setPost] = useState({});
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const [tempContent, setTempContent] = useState("");
  const AddComment = async () => {
    const data = new FormData();
    data.append("title", "");
    data.append("description", tempContent);
    data.append("foto", file[0]);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`
      },
      body: data
    };
    await fetch(
      `https://veggiesapp.herokuapp.com/posts/${props.match.params.id}/`,
      config
    )
      .then(res => {
        res.text().then(text => {
          let json = JSON.parse(text);
          if (json.author) {
            notify.set("Pomyślnie dodano komentarz.");
            setTimeout(() => {
              setDeleyedRedirect(true);
            }, 2000);
          } else {
            console.log(res);
            console.log(res.response);
            notify.set("Wystąpił nieoczekiwany błąd!");
          }
        });
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
  };
  useEffect(() => {
    console.log(props.match.params);
    const fetchData = async () => {
      await axios(
        `https://veggiesapp.herokuapp.com/posts/${props.match.params.id}`
      )
        .then(res => {
          console.log(res.data);
          setPost({ ...res.data });
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <MainContainer>
      {deleyedRedirect && <Redirect to={`/posts`} />}
      <Container>
        {post[0] && (
          <OrderedList>
            <UnorderedList>
              <HeaderPostsContainer>
                <HeaderPostsItem>
                  <HeaderPostsText>{post[0] && post[0].title}</HeaderPostsText>
                </HeaderPostsItem>
                <HeaderPostsItem>
                  {post[0] && post[0].author.username}
                </HeaderPostsItem>
              </HeaderPostsContainer>
              <ColumnContainer>
                <div>{post[0] && post[0].description}</div>
              </ColumnContainer>
              <Image src={post[0] && post[0].foto} />

              <HeaderText>Komentarze:</HeaderText>

              <UnorderedListComments>
                {post[1].map(comment => {
                  return (
                    <UnorderedListCommentsIn>
                      <HighlightItem>{comment.author.username}</HighlightItem>
                      <CommentContent>{comment.description}</CommentContent>
                      <img
                        style={{ width: 120, margin: "1% 0 0 0" }}
                        src={comment.foto}
                      />
                    </UnorderedListCommentsIn>
                  );
                })}

                <CommentContainer>
                  <TextInput
                    type="text"
                    placeholder="Wprowadź treść komentarza"
                    onChange={e => {
                      setTempContent(e.target.value);
                    }}
                  />
                  <div class="image-upload">
                    <label for="file-input-0">
                      <ImageForUpload
                        src={
                          file[0].name ? URL.createObjectURL(file[0]) : file[0]
                        }
                      />
                    </label>
                    <input
                      id="file-input-0"
                      type="file"
                      onChange={e => setFile([e.target.files[0]])}
                    />
                  </div>
                  <SubmitCommentButton
                    onClick={() => {
                      AddComment();
                    }}
                  >
                    Dodaj komentarz
                  </SubmitCommentButton>
                </CommentContainer>
              </UnorderedListComments>
            </UnorderedList>
          </OrderedList>
        )}
      </Container>

      <RightPanel />
    </MainContainer>
  );
};
export default Post;