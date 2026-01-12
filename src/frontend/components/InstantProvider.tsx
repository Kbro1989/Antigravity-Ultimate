import React from 'react';
import { init } from "@instantdb/react";
import schema from "../services/data/instant.schema";

const appId = "9e151e9b-e6b2-4efd-88a4-c21276ae1e9b";

export const db = init({
    appId,
    schema,
    useDateObjects: true,
});

export const InstantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
    // InstantDB doesn't strictly require a provider if using the init() client directly,
    // but we can wrap it if we want to provide the 'db' instance via context later.
};
