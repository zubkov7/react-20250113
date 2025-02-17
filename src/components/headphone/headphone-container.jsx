import { Headphone } from "./headphone";
import {
  useAddReviewMutation,
  useGetHeadphoneByIdQuery,
  useGetHeadphonesQuery,
} from "../../redux/services/api/api";
import { useCallback } from "react";

export const HeadphoneContainer = ({ headphoneId }) => {
  // const { data, isFetching, isError } = useGetHeadphoneByIdQuery(id);

  const { data, isFetching, isError } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === headphoneId),
    }),
  });

  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({
        headphoneId,
        review: {
          ...review,
          user: "hr83h29h9h9u12h9213",
        },
      });
    },
    [addReview, headphoneId]
  );

  if (isFetching) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  if (!data) {
    return null;
  }

  const { name, brand, reviews, codecs } = data || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={headphoneId}
      addReview={handleAddReview}
      addReviewLoading={isLoading}
    />
  );
};
