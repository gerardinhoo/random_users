// import React, { useReducer, useEffect } from "react";
// import ProfileReducer from "./profileReducer";
// import ProfileContext from "./profileContext";
// import { GET_NAMES, SEARCH_USERS, CLEAR_USERS, SET_LOADING } from "../types";

// const ProfileState = props => {
//   const initialState = {
//     names: [],
//     loading: false
//   };

//   const [state, dispatch] = useReducer(ProfileReducer, initialState);

//   // GET NAMES

//   dispatch({
//     type: GET_NAMES,
//     payload: useEffect(() => {
//       setLoading();
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(users => setNames(users))
//         .then(users => setLoading(false));
//     }, [])
//   });

//   // CLEAR USERS

//   // SET LOADING
//   const setLoading = () => dispatch({ type: SET_LOADING });

//   return (
//     <ProfileContext.Provider
//       value={{
//         names: state.names,
//         search: state.search,
//         loading: state.loading
//       }}
//     >
//       {props.children}
//     </ProfileContext.Provider>
//   );
// };

// export default ProfileState;
