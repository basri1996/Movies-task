import { Pagination } from "@mui/material";
import Review from "./Review";
import { ReviewsWrapper } from "./ReviewStyles";
import { SectionTitle } from "../slider/SliderStyles";
import { useState } from "react";
import { ReviewObjectType } from "../../redux/features/contentdetail/ContentDetailTypes";

const ReviewsComponent = ({ reviews }:{ reviews: ReviewObjectType[] }) => {
  const PaginationCount = Math.floor(reviews.length / 3)
  const [paginationCount, setPaginationCount] = useState({ 1: 0, 2: 3 });

  function HandleChange(value: number) {
    const last = value * 3;
    const first = value * 3 - 3;
    setPaginationCount({ 1: first, 2: last });
  }
  return (
    <ReviewsWrapper>
      <SectionTitle>Reviews</SectionTitle>
      {reviews
        .slice(paginationCount[1], paginationCount[2])
        .map((review) => (
          <Review key={review.id} review={review} />
        ))}
      <Pagination
        count={PaginationCount}
        color="primary"
        variant="outlined"
        onChange={(_, value) => HandleChange(value)}
      />
    </ReviewsWrapper>
  );
};

export default ReviewsComponent;
