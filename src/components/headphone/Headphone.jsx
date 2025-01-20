import { Counter } from "../counter/Counter";

export const Headphone = ({ headphone }) => {
  const { name, reviews, codecs } = headphone;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(reviews.length) && (
        <>
          <h3>Reviews</h3>
          {reviews.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </>
      )}
      <h3>Codecs</h3>
      {codecs.map((codec) => (
        <span key={codec}>{codec}</span>
      ))}

      <Counter />
    </div>
  );
};
