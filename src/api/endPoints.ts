const BASE_URL=`https://server-node-3r5n.onrender.com/api`;
//////////////////////////////
const BASE_AUTH=`${BASE_URL}/auth`
export const AUTH_URLS={
    login:`${BASE_AUTH}/login`,
     register:`${BASE_AUTH}/register`,
     refresh:`${BASE_AUTH}/refresh`,
     forget:`${BASE_AUTH}/forgot-password`,
     reset:`${BASE_AUTH}/reset-password`,
     logout:`${BASE_AUTH}/logout`,
}