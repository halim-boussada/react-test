import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalstorage";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useLocalStorage("userFullData", {});
  const [userLS, setuserLS] = useLocalStorage("userData", {});

  async function getMyData() {
    try {
      const { data } = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: "Bearer " + userLS.accessToken,
        },
      });

      const ref = await axios.post("https://dummyjson.com/auth/refresh", {
        refreshToken: userLS.refreshToken,
        expiresInMins: 1,
      });
      console.log(ref.data);
      setuserLS(ref.data)
      setUserData(data);
    } catch (err) {
      logout();
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    getMyData();
  }, []);
  return (
    <div>
      <h1>hello to profile</h1>
      {userData && (
        <div>
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p>Email: {userData.email}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}

      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
