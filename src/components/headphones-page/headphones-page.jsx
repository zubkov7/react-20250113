import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../redux/entities/headphones/slice";
import { HeadphoneContainer } from "../headphone/headphone-container";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(
    headphonesIds?.[0]
  );

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <Button
            key={id}
            title={id}
            onClick={() => handleSetActiveHeadphoneId(id)}
            disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphoneId && <HeadphoneContainer id={activeHeadphoneId} />}
    </div>
  );
};
