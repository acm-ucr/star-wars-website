import Card from "./Card";
import { ITEMS } from "@/data/board";
import Header from "./Header";

const Board = () => {
  return (
    <div className="w-full">
      <Header title={"Meet the Board"} />
      <div className="flex w-full flex-wrap justify-center gap-20">
        {ITEMS.map((item, index) => (
          <div className="w-1/3 md:w-1/4">
            <Card
              key={index}
              topText={item.topText}
              bottomText={item.bottomText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
