/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { UserCard } from '../components/UserCard';

import './users-styles.css';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchApi = async (): Promise<void> => {
      const response = await api.get('/users');

      const { data }: { data: User[] } = response.data;
      setUsers(data);

      console.log(users);
    };
    fetchApi();
  }, []);
  return (
    <div className="users">
      <h1>Lista de usuários</h1>
      <div className="users-container">
        {users && users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
      <button className="nav-btn" onClick={handleClick}>
        Voltar para o início
      </button>
    </div>
  );
};

export default Users;
