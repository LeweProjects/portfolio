import { useInView } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";

export interface headerProps {
  logo: React.MutableRefObject<any>;
  home: React.MutableRefObject<any>;
  skills: React.MutableRefObject<any>;
  projects: React.MutableRefObject<any>;
  about: React.MutableRefObject<any>;
  contacts: React.MutableRefObject<any>;
  isLogoInView: boolean;
  isHomeInView: boolean;
  isProjectInView: boolean;
  isSomeProjectInView: boolean;
  isAboutInView: boolean;
  isContactsInView: boolean;
  isSkillsInView: boolean;
}