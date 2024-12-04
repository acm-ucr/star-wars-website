import frame from "@/public/frame/pastevents1.svg";
import frame2 from "@/public/frame/upcomingevents.svg";
import { StaticImageData } from "next/image";

export type Background = {
  id: string;
  Image: StaticImageData;
  Message: string;
};

export const FILTERS: Background[] = [
  {
    id: "upcoming",
    Image: frame2,
    Message: "UPCOMING EVENTS",
  },
  {
    id: "past",
    Image: frame,
    Message: "PAST EVENTS",
  },
];
