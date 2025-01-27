import { Codecs } from "../codecs/codecs";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { useRef } from "react";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  const sectionRef = useRef(); // { current: undefined }

  if (!name) {
    return null;
  }

  return (
    <section
      // ref={(ref) => {
      //   console.log("ref test");
      //   console.log(ref);
      // }}
      // { current: dom element }
      ref={sectionRef}
    >
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>empty review</div>}
      {codecs.length ? <Codecs codecs={codecs} /> : <div>empty codecs</div>}
      <HeadphoneCounter />
      <ReviewForm />
    </section>
  );
};
