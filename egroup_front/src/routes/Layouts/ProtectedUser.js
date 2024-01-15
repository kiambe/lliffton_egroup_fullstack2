import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function ProtectedUser() {
  let location = useLocation();
  let { pathname } = location;
  const navigate = useNavigate();

  // const { redirectTo } = queryString.parse(location.search);
  const appData = useSelector((state) => state.appData);
  const [nextPage, setNextPage] = useState(null);

  let { offlineUserToken } = appData;

  let { loginUserState } = appData;
  let { data } = loginUserState;

  useEffect(() => {
    // check if user is logged in
    // if so, check if the path on url is /home, and navigate to the path
    if (loginUserState.isLoggedIn) {
      if (location.pathname !== "/home") {
        // pathname
        navigate(`${location.pathname}`, { replace: true });
      } else if (location.pathname !== "/") {
        navigate(`/home`, { replace: true });
      } else {
        navigate(`/home`, { replace: true });
      }
    }
  }, [loginUserState.isLoggedIn]);

  return (
    <div>
      {/* {JSON.stringify(loginUserState)} */}
      {loginUserState.loading && (
        <>
          <div className="spinner-border spinner-border-md mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      )}
      {loginUserState.isLoggedIn && !loginUserState.loading && <Outlet />}
    </div>
  );
}

export default ProtectedUser;
// && type === "talent"
