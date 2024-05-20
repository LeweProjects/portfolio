import { useState } from "react";

const useLandToHome = () => {
  const [home, setHome] = useState<boolean>(false);

  function handleToHome(): void {
    setHome(!home);
  }
console.log(home)
  return {
    home,
    setHome,
    handleToHome,
  };
};

export default useLandToHome;
