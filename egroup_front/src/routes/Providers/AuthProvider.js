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

  const logout = (nextPage) => {
    console.log({nextPage})
    setTimeout(() => {
      removeValueFromOffline("@userData");
      removeValueFromOffline("@isLoggedIn");
      removeValueFromOffline("@isLoggedIn2");
      removeValueFromOffline("@userData2");
      if(nextPage !== "/login"){
        navigate(`/login?nextPage=${nextPage}`, { replace: true });

      }else{
      navigate(`/login?nextPage=home`, { replace: true });

      }
      dispatch(logoutUser());
    }, 1000);
  };

  useEffect(() => {
    // Get the user offline token
    setTimeout(() => {
      if (!loginUserState.isLoggedIn) {
        let myoffline = getOfflineData("@isLoggedIn").then((res) => {
          dispatch(getUserTokenOffline(res));
          getOfflineData("@userData").then((res2) => {
            dispatch(getUserOffline(res2))
              .unwrap()
              .then((res3) => {
                if (res3) {
                  // handle expiry of the token and time
                  if (res3.user.hasOwnProperty("expires")) {
                    let expires = res3.user.expires;
                    let date1 = new Date(expires);

                    const date2 = new Date();

                    if (date2 > date1) {
                      logout(pathname);
                    } else {
                    }
                  } else {
                    logout(pathname);
                  }
                }
              });
          });

          if (!res) {
            dispatch(getUserTokenOffline(false));
            if(pathname !== "/login"){
              navigate(`/login?nextPage=${pathname}`, { replace: true });
      
            }else{
            navigate(`/login?nextPage=home`, { replace: true });
      
            }

            // navigate(`/login?nextPage=${pathname}`, { replace: true });
          }
        });
      }
    }, 2000);
  }, [offlineUserToken.userToken, location, loginUserState]);

  return <>{children}</>;
};

export default AuthProvider;
