import { Dispatch, SetStateAction } from "react";

export interface sideBarProps {
  scrollTo(id: string): void;
  toggle(): void;
  openSide: boolean;
  setOpenSide: Dispatch<SetStateAction<boolean>>;
}
