import React from "react";
import HistoryLanding from "@/components/history/HistoryLanding";
import PastBoardMembers from "@/components/history/HistoryBoard";
import PastJediMasters from "@/components/history/HistoryPast";

const Page = () => {
  return (
    <div className="w-full px-4 py-8">
      <HistoryLanding title="CLUB HISTORY" />
      <PastBoardMembers />
      <PastJediMasters />
    </div>
  );
};

export default Page;
