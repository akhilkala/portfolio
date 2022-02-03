import { useState } from "react";
import axios from "axios";

const useClickLogger = (base: "landing" | "projects" | "contact") => {
  const [logged, setLogged] = useState(false);

  const click = async (name: string, fn?: () => void) => {
    if (fn) fn();
    if (logged) return;

    const endpoint = `/api/stats/click/${base}.${name}`;

    axios
      .patch(
        endpoint,
        {},
        {
          headers: {
            Token: localStorage.getItem("token-x") || "",
          },
        }
      )
      .then(() => {
        setLogged(true);
      })
      .catch(() => {
        axios.post("/api/error", { endpoint });
      });
  };

  return click;
};

export default useClickLogger;
