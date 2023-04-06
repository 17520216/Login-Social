import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, memo, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children, ...props }) => {
  const router = useRouter();
  const { query } = router;

  const { data: session, status } = useSession();

  const [user, setUser] = useState({});

  const getProfile = async () => {
    // const res = await GET({
    //     path: '/api/v1/auth/customers/profiles',
    //     token: session.token.id,
    // });

    // if (res.status) {
    //     return res.data;
    // }
    // onSignOut();
    // return null;
    return session?.session?.user;
  };

  const onChangeSession = async (params) => {
    console.log("🚀status---->", status);

    if (status == "loading") return; //skip loading

    if (status == "unauthenticated") {
      // not login
      console.log("🚀11---->", 11);
      setUser(null);
      await signOut({ redirect: false });
      return;
    }

    if (!Object.keys(user).length) {
      // handle logi
      // handle profile
      const _user = await getProfile();
      if (!_user) {
        console.log("_user", _user);
        console.log("PLEASE CONFIG API GET PROFILE!");
        return;
      }
      setUser(_user);

      return null;
    }
  };

  useEffect(() => {
    onChangeSession();
    return () => {};
  }, [status, JSON.stringify(session)]);

  return (
    <UserContext.Provider value={{ user }} {...props} session={session}>
      {children}
      <pre className="fixed z-[999999] bottom-0 left-0 w-full text-white">
        {JSON.stringify(user)}
      </pre>
    </UserContext.Provider>
  );
};

export default memo(UserProvider);

export const useUser = (props = {}) => {
  return useContext(UserContext);
};
