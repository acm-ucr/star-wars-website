import Card from "./Card";
import { ITEMS } from "@/data/board";

const Board = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {ITEMS.map((item, index) => (
        <Card key={index} topText={item.topText} bottomText={item.bottomText} />
      ))}
    </div>
  );
};

export default Board;
