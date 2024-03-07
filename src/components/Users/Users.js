import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import defaultUserPhoto from "../../assets/images/avatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        this.props.addUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={classes.users}>
        {this.props.users.map((user) => (
          <div className={classes.user}>
            <img
              src={user.photos.small ? user.photos.small : defaultUserPhoto}
              alt={user.name}
              className={classes.avatar}
            />
            <div className={classes.info}>
              <div className={classes.name}>{user.name}</div>
              <div className={classes.status}>{user.status}</div>
              <div className={classes.location}>South Park</div>
            </div>
            {user.followed ? (
              <button
                onClick={() => this.props.unfollow(user.id)}
                className={classes.unfollow}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => this.props.follow(user.id)}
                className={classes.follow}
              >
                FOLLOW
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

// const Users = (props) => {
//   if (props.users.length === 0) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users")
//       .then((response) => {
//         debugger;
//         props.addUsers(response.data.items);
//       });
//   }
//   return (
//     <div className={classes.users}>
//       {props.users.map((user) => (
//         <div className={classes.user}>
//           <img
//             src={user.photos.small ? user.photos.small : defaultUserPhoto}
//             alt={user.name}
//             className={classes.avatar}
//           />
//           <div className={classes.info}>
//             <div className={classes.name}>{user.name}</div>
//             <div className={classes.status}>{user.status}</div>
//             <div className={classes.location}>South Park</div>
//           </div>
//           {user.followed ? (
//             <button
//               onClick={() => props.unfollow(user.id)}
//               className={classes.unfollow}
//             >
//               UNFOLLOW
//             </button>
//           ) : (
//             <button
//               onClick={() => props.follow(user.id)}
//               className={classes.follow}
//             >
//               FOLLOW
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

export default Users;
