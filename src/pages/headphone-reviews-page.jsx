import { useParams } from "react-router";
import { Reviews } from "../components/reviews/reviews";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  return <Reviews headphoneId={headphoneId} />;
};
