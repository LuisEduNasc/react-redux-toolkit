import React, { useState } from 'react';

import { addNewPost, postAdded, TStatus } from './postsSlice';
import { selectAllUsers } from 'features/users/usersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  Container,
  PostForm,
  PostFormLabel,
  PostFromButton,
  PostHeader,
  PostInput,
  PostSelectAuthor,
  PostTextArea,
} from './style';

export const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [addRequestStatus, setAddRequestStatus] = useState<string>('idle');

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setContent(e.target.value);
  const onAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>): void => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = (): void => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <Container>
      <PostHeader>Add a New Post</PostHeader>
      <PostForm>
        <PostFormLabel htmlFor="postTitle">Post Title:</PostFormLabel>
        <PostInput
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
          placeholder="My new post..."
        />

        <PostFormLabel htmlFor="postAuthor">Author:</PostFormLabel>
        <PostSelectAuthor id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </PostSelectAuthor>

        <PostFormLabel htmlFor="postContent">Content:</PostFormLabel>
        <PostTextArea
          name="postContent"
          id="postContent"
          cols={30}
          rows={10}
          value={content}
          onChange={onContentChanged}
          placeholder="This is my new post..."
        />
        <PostFromButton type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </PostFromButton>
      </PostForm>
    </Container>
  );
};
