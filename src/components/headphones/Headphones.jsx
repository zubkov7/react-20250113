import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/Headphone";

export const Headphones = () => {
  return (
    <>
      <h1>Headphones</h1>
      {headphones.map((headphone) => (
        <Headphone key={headphone.id} headphone={headphone} />
      ))}
    </>
  );
};
