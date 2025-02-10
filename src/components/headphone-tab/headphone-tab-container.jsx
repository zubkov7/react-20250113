import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Button } from "../button/button";
import { NavLink } from "react-router";

export const HeadphoneTabContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return (
    <NavLink
      to={`/headphones/${id}`}
      // className={({ isActive }) =>
      //   isActive ? "someActiveClass" : "someInactiveClass"
      // }
    >
      {({ isActive }) => <Button title={headhpone.name} disabled={isActive} />}
    </NavLink>
  );
};
