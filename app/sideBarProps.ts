import React, { Dispatch, SetStateAction } from "react";

export interface sideBarProps {
  scrollTo(id: string): void;
  openSide: boolean;
  setOpenSide: Dispatch<SetStateAction<boolean>>;
}
