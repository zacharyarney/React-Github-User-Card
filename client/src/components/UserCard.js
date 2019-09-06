import React from 'react';

const UserCard = (props) => {
  const { userData, followers } = props;

  return (
    <div>
      <h1>{userData.login}</h1>
      <img src={userData.avatar_url} alt="That's Zach!" />
      <br />
      <a href={userData.html_url}>GitHub Profile</a>
      <h3>{userData.login}'s Followers</h3>
      <ul>
        {followers.map(follower => {
          return(
          <li key={follower.login} >{follower.login}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserCard;
