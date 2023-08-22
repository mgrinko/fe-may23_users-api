import { User } from '../types';

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

function getMaxId(users: User[]): number {
  const ids = users.map(user => user.id);

  return Math.max(...ids);
}

function getAll(): User[] {
  return users;
}

function getById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

function create({ name, carColorId }: Omit<User, 'id'>): User {
  const newUser = {
    id: getMaxId(users) + 1,
    name,
    carColorId,
  };

  users.push(newUser);

  return newUser;
}

function validate({ name, carColorId }: Omit<User, 'id'>): boolean {
  return typeof name !== 'string'
      || typeof carColorId !== 'number';
}

export const userService = { validate, getAll, getById, create };