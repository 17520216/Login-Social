import { useUser } from "@/context/UserProvider";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

const LoginGoogle = () => {
  const { data: session } = useSession();
  const { user } = useUser();

  console.log("🚀user---->", user);
  console.log("🚀session---->", session);
  if (session) {
    return (
      <>
        <p>HI, {user?.name}</p>
        <img src={user?.image} alt="" style={{display: "block", margin:"10px 0"}} />
        <button onClick={signOut}>Sign out</button>
      </>
    );
  } else {
    return (
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    );
  }
};

export default LoginGoogle;
