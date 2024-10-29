import Card from "../Card";
import { ITEMS } from "@/data/creation";
import Header from "../Header";

const Creation = () => {
  return (
    <div className="w-full">
      <Header title={"CREATION"} />
      <div className="flex w-full flex-wrap justify-center gap-20">
        {ITEMS.map((item, index) => (
          <div key={index} className="w-1/4 sm:w-1/4">
            <Card topText={item.topText} bottomText={item.bottomText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creation;
