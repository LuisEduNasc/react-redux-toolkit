import React from 'react';
import { useAppSelector } from 'app/hooks';
import { selectAllUsers } from 'features/users/usersSlice';
import { PostAuthorText } from './style';

export const PostAuthor: React.FC<{ userId: string | undefined }> = ({ userId }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <PostAuthorText>by {author ? author.name : 'Unknown author'}</PostAuthorText>;
};
