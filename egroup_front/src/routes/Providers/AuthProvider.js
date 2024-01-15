import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getUserOffline,
  getUserTokenOffline,
} from "../../app-redux/features/appData/appDataSlice";
import { getOfflineData } from "../../constants/OfflineStorage";

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
                if(res3){
                  if (res3.user.hasOwnProperty("expires")) {
                    let expires = res3.user.expires;
                    let date1 = new Date(expires);
  
                    const date2 = new Date();
  
                    if (date2 < date1) {
                      navigate(`/login`, { replace: true });
                    } else {
                    }
                  } else {
                    navigate(`/login`, { replace: true });
                  }
                }
               
              });
          });
          // dispatch(getUserOffline("@userData"))
          // console.log({res})
          if (!res) {
            // alert(0)
            dispatch(getUserTokenOffline(false));

            navigate(`/login`, { replace: true });
          }
        });
      }
    }, 2000);
    // dispatch(getUserTokenOffline("@isLoggedIn"));
    // console.log(offlineUserToken.userToken)
  }, [offlineUserToken.userToken, location, loginUserState]);

  useEffect(() => {
    //get user from token if not null
    // if (offlineUserToken.userToken !== null) {
    if (loginUserState.isLoggedIn) {
      // dispatch(getUserOffline("@userData"));
    }

    // !loginUserState.loading && dispatch(getUserOffline("@userData"));
    // }
  }, [offlineUserToken.userToken]);

  useEffect(() => {
    // if (loginUserState.isLoggedIn && !loginUserState.success) {
    //     if (nextPage === null) {
    //       if (pathname !== "/data/home") {
    //         navigate(`${pathname}`, { replace: true });
    //       } else {
    //         navigate(`/data/home`, { replace: true });
    //       }
    //     } else {
    //       navigate(`${nextPage}`, { replace: true });
    //     }
    // } else {
    //   if (loginUserState.error !== "") {
    //     navigate(pathname, { replace: true });
    //   }else{
    //     if(pathname === "/"){
    //       if(loginUserState.isLoggedIn){
    //         navigate("/data/home", { replace: true });
    //       }else{
    //         navigate("/login", { replace: true });
    //       }
    //   }
    //   }
    // }
  }, [loginUserState]);

  return <>{children}</>;
};

export default AuthProvider;
