import { contentImageUrl } from "../../redux/constants";
import {
  CreatedAt,
  HeaderDivRight,
  HeaderWrapper,
  ReviewContent,
  ReviewWrapper,
  UserIcon,
  UserName,
} from "./ReviewStyles";
import NoPhoto from "../../assets/images/noPhoto.jpg";
import { useState } from "react";
import { Button } from "@mui/material";
import { ReviewObjectType } from "../../redux/features/contentdetail/ContentDetailTypes";

const Review = ({review}:{review:ReviewObjectType}) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const minContent =
    review.content.length > 1000
      ? review.content.slice(1, 1000)
      : review.content;

  return (
    <ReviewWrapper >
      <HeaderWrapper>
        <UserIcon
          src={
            review.author_details.avatar_path
              ? contentImageUrl(review.author_details.avatar_path)
              : NoPhoto
          }
          alt="avatar"
        />
        <HeaderDivRight>
          <UserName>A review by {review.author}</UserName>
          <CreatedAt>{review.created_at.slice(0, 10)}</CreatedAt>
        </HeaderDivRight>
      </HeaderWrapper>
      <ReviewContent>{!seeMore ? minContent : review.content}</ReviewContent>
      {review.content.length > 1000 && (
        <Button onClick={() => setSeeMore(!seeMore)}>{!seeMore ?"More" :"Less"}</Button>
      )}
    </ReviewWrapper>
  );
};

export default Review;
