import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";

export const HeadphonesPage = ({ title }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphones[0].id);

  const activeHeadphone = headphones.find(({ id }) => id === activeHeadphoneId);

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
        {headphones.map(({ name, id }) => (
          <Button
            key={id}
            title={name}
            onClick={() => handleSetActiveHeadphoneId(id)}
            disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
        />
      )}
    </div>
  );
};
