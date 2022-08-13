import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  console.log(user)
  const name = user?.user?.displayName;
  const email = user?.user?.email;
  const photoURL = user?.user?.photoURL;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentUser = { email: email, name: name, photoURL:photoURL};
  useEffect(() => {
    if (email) {
      fetch(`https://tranquil-dawn-10499.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [currentUser]);
  return [token];
};
export default useToken;
