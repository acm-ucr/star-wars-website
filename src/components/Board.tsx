import Card from "./Card";
import { ITEMS } from "@/data/board";

const Board = () => {
  return (
    <div className="grid grid-cols-3 gap-x-32 gap-y-44">
      {ITEMS.map((item, index) => (
        <Card key={index} topText={item.topText} bottomText={item.bottomText} />
      ))}
    </div>
  );
};

export default Board;
