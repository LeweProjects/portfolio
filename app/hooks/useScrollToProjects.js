
const useScrollToProjects = () => {
    function scrollToProjects() {
        const section = document.getElementById("projects");
        section?.scrollIntoView({ behavior: "smooth", align: true });
      }
  return scrollToProjects
}

export default useScrollToProjects