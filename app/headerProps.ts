import { useInView } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";

export interface headerProps {
  home: React.MutableRefObject<any>;
  skills: React.MutableRefObject<any>;
  projects: React.MutableRefObject<any>;
  about: React.MutableRefObject<any>;
  contacts: React.MutableRefObject<any>;
  isHomeInView: boolean;
  isProjectInView: boolean;
  isAboutInView: boolean;
  isContactsInView: boolean;
  isSkillsInView: boolean;
}
