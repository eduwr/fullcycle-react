import React from 'react';

import { User } from '../pages/Users';
import './styles.css';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({ user }) => {
  const { first_name: firstName, last_name: lastName, email, avatar } = user;

  return (
    <div className="card-container">
      <img src={avatar} alt={`${firstName}'s avatar`} className="avatar" />
      <div className="wrapper">
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
