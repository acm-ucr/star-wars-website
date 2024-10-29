"use client";
import {} from /*Component, useState*/ "react";
//import Events from "./Events";
import Filter from "@/components/Filter";
import { FILTERS } from "@/data/filters";
import { MESSAGE } from "@/data/filterMessage";

const Wrapped = () => {
  // const [component, setComponent] = useState("upcoming");

  // const handleFilterChange = ({ component }: { component: Component }) => {
  //   setComponent(component);
  // };

  return (
    <div>
      <Filter
        filters={FILTERS}
        message={MESSAGE}
        //onChange={handleFilterChange}
      />
      {/* {component === "upcoming" && <Events type="upcoming" />}
      {component === "past" && <Events type="past" />} */}
    </div>
  );
};

export default Wrapped;
