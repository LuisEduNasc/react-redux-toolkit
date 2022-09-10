import React from 'react';

import { IPost } from './postsSlice';
import { PostAuthor } from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Card, PostContent, PostTitle, PostAuthorContainer } from './style';

const PostsExcerpt: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Card>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.body.substring(0, 100)}</PostContent>
      <PostAuthorContainer>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </PostAuthorContainer>
      <ReactionButtons post={post} />
    </Card>
  );
};

export default PostsExcerpt;
