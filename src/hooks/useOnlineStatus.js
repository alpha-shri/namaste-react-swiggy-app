import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Check if online status.
  // return the flag is online.
  const [onlineStatus, setonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
