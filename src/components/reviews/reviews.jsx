import { useRequest } from "../../redux/entities/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import { useGetReviewsByHeadphoneIdQuery } from "../../redux/services/api/api";
import { Review } from "../review/review";

export const Reviews = ({ headphoneId }) => {
  const usersRequestStatus = useRequest(getUsers);
  const {
    data: reviewsData,
    isLoading: reviewsIsLoading,
    isError: reviewsIsError,
  } = useGetReviewsByHeadphoneIdQuery(headphoneId);
  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING || reviewsIsLoading;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED || reviewsIsError;

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return (
    <div>
      <h3>Reviews</h3>
      {reviewsData?.map(({ id, text, user }) => (
        <li key={id}>
          <Review text={text} userId={user} />
        </li>
      ))}
    </div>
  );
};
