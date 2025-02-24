import { Suspense } from "react";
import { CodecsContainer } from "../codecs/codecs-container";

export const HeadphoneCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return (
    <Suspense fallback={<div>...loading HeadphoneCodecsPage</div>}>
      <CodecsContainer headphoneId={headphoneId} />
    </Suspense>
  );
};
