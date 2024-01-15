import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getUserOffline,
  getUserTokenOffline,
  logoutUser,
} from "../../app-redux/features/appData/appDataSlice";
import {
  getOfflineData,
  removeValueFromOffline,
} from "../../constants/OfflineStorage";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;

  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  let nextPage = searchParams.get("nextPage");

  const appData = useSelector((state) => state.appData);

  let { offlineUserToken } = appData;
  let { loginUserState } = appData;

  const logout = () => {
    setTimeout(() => {
      removeValueFromOffline("@userData");
      removeValueFromOffline("@isLoggedIn");
      removeValueFromOffline("@isLoggedIn2");
      removeValueFromOffline("@userData2");
      navigate(`/login`, { replace: true });
      dispatch(logoutUser());
    }, 1000);
  };

  useEffect(() => {
    // Get the user offline token
    setTimeout(() => {
      if (!loginUserState.isLoggedIn) {
        // alert(0)
        // dispatch(getUserTokenOffline("@isLoggedIn"));
        // console.log("getting user offline")
        let myoffline = getOfflineData("@isLoggedIn").then((res) => {
          dispatch(getUserTokenOffline(res));
          // updateToken(res)
          getOfflineData("@userData").then((res2) => {
            dispatch(getUserOffline(res2))
              .unwrap()
              .then((res3) => {
                if (res3) {
                  if (res3.user.hasOwnProperty("expires")) {
                    let expires = res3.user.expires;
                    let date1 = new Date(expires);

                    // console.log({date1})

                    const date2 = new Date();
                    // console.log({date2,date1})

                    if (date2 > date1) {
                      logout();

                      // navigate(`/login`, { replace: true });
                    } else {
                      // console.log("zzzz")
                    }
                  } else {
                    logout();

                    // navigate(`/login`, { replace: true });
                  }
                }
              });
          });

          if (!res) {
            dispatch(getUserTokenOffline(false));

            navigate(`/login`, { replace: true });
          }
        });
      }
    }, 2000);
  }, [offlineUserToken.userToken, location, loginUserState]);

  return <>{children}</>;
};

export default AuthProvider;
