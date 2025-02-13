import { Tabs } from "../tabs/tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGetHeadphonesRequestStatus,
  selectHeadphonesIds,
} from "../../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";
import { useEffect } from "react";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";

export const HeadphonesPage = () => {
  const dispatch = useDispatch();

  const headphonesIds = useSelector(selectHeadphonesIds);
  const requestStatus = useSelector(selectGetHeadphonesRequestStatus);

  useEffect(() => {
    dispatch(getHeadphones());
  }, [dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || !headphonesIds?.length) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
