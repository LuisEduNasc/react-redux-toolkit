import { useAppDispatch } from 'app/hooks';
import React from 'react';

import { IPost, reactionAdded, TReaction } from './postsSlice';
import { PostReactionButton, PostReactionContainer } from './style';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😲',
  heart: '❤',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons: React.FC<{ post: IPost }> = ({ post }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <PostReactionButton
        key={name}
        type="button"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name as TReaction }))}
      >
        {emoji} {post.reactions[name as TReaction]}
      </PostReactionButton>
    );
  });

  return <PostReactionContainer>{reactionButtons}</PostReactionContainer>;
};

export default ReactionButtons;
