import React from "react";
import { sideBarProps } from "../sideBarProps";
const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const SidBarButton: React.FC<sideBarProps> = ({ toggle }) => {
  return (
    <button onClick={toggle} className="mt-5 ml-3 rounded-full absolute z-40">
      <div className=" bg-zinc-900 rounded-full w-14 h-14 flex justify-center items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 23 18"
          className="flex justify-center items-center"
        >
          <Path
            d="M 2 2.5 L 20 2.5"
            className="top"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 6 16.5 L 19 2.5" },
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
          <Path
            d="M 2 16.346 L 20 16.346"
            className="bottom"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 6 2.5 L 19 16.346" },
            }}
          />
        </svg>
      </div>
    </button>
  );
};

export default SidBarButton;
