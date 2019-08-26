import React, { useReducer } from "react";
import ProfileReducer from "./profileReducer";
import { GET_NAMES, SEARCH_USERS, CLEAR_USERS, SET_LOADING } from "../types";

const ProfileState = props => {
  const initialState = {
    names: [],
    loading: false
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // GET NAMES

  // SEARCH USERS

  // CLEAR USERS

  // SET LOADING

  return (
    <ProfileState.Provider
      value={{
        names: state.names,
        search: state.search,
        loading: state.loading
      }}
    >
      {props.children}
    </ProfileState.Provider>
  );
};

export default ProfileState;
