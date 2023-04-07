import { SessionProvider } from 'next-auth/react';
import React from 'react';
import Compose from './Compose';
import UserProvider from './UserProvider';

// components/website/contexts/compose/Providers
const Providers = (props) => {
    return (
                <Compose
                    components={[
                        //
                        SessionProvider,
                        UserProvider,
                    ]}
                    // basePath={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`}
                    basePath={`/api/auth`}
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    {...props}
                ></Compose>
    );
};

export default Providers;
