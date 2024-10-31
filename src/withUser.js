import { useState, useEffect } from "react";
import axios from "axios";

export const widthUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async() => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />
  };
};