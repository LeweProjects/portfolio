import { useInView } from "framer-motion";
import React, { createRef, useRef } from "react";
import { headerProps } from "../headerProps";

const useRefForInView = () => {
  const home = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const about = useRef(null);
  const contacts = useRef(null);

  // const arrLength = arr.length;
  // const [elRefs, setElRefs] = React.useState([]);

  // React.useEffect(() => {
  //   // add or remove refs
  //   setElRefs((elRefs) =>
  //     Array(arrLength)
  //       .fill()
  //       .map((_, i) => elRefs[i] || createRef())
  //   );
  // }, [arrLength]);

  // const ref = createRef<any>();
  // console.log(ref);
  const isHomeInView = useInView(home, {
    amount: "all",
  });
  const isProjectInView = useInView(projects, {
    amount: "all",
  });
  const isSkillsInView = useInView(skills, {
    amount: "all",
  });
  const isAboutInView = useInView(about, {
    amount: "all",
  });
  const isContactsInView = useInView(contacts, {
    amount: "all",
  });

  // React.useEffect(() => {
  //   if (isProjectInView) {
  //     console.log(isProjectInView);
  //   }
  // }, [isProjectInView]);
  return {
    projects,
    skills,
    home,
    about,
    contacts,
    isHomeInView,
    isProjectInView,
    isSkillsInView,
    isContactsInView,
    isAboutInView
  };
};

export default useRefForInView;
