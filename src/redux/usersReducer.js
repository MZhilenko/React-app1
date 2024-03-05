let initialState = {
  users: [
    {
      id: 1,
      fullName: "Eric Cartman",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/eric-cartman.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
    {
      id: 2,
      fullName: "Stan Marsh",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/stan-marsh.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: true,
    },
    {
      id: 3,
      fullName: "Kyle Broflovski",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/kyle-broflovski.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: true,
    },
    {
      id: 4,
      fullName: "Kenny McCormick",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/kenny-mccormick.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
    {
      id: 5,
      fullName: "Butters Stotch",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/butters-stotch.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
    {
      id: 6,
      fullName: "Eric Cartman",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/eric-cartman.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: true,
    },
    {
      id: 7,
      fullName: "Stan Marsh",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/stan-marsh.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
    {
      id: 8,
      fullName: "Kyle Broflovski",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/kyle-broflovski.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: true,
    },
    {
      id: 9,
      fullName: "Kenny McCormick",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/kenny-mccormick.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
    {
      id: 10,
      fullName: "Butters Stotch",
      avatar:
        "https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/butters-stotch.png",
      status: "Lorem ipsum dolor sit amet",
      location: { city: "South Park", country: "USA" },
      followed: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case "ADD_USERS": {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const addUsersAC = (users) => ({ type: "ADD_USERS", users });

export default usersReducer;
