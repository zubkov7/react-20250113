import { HeadphoneReviewsPage } from "../../../../components/pages/headphone-reviews-page";

export const generateStaticParams = async () => {
  return [{ headphoneId: "794418" }];
};

export default HeadphoneReviewsPage;
