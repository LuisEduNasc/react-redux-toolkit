import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { PostDate } from './style';

const TimeAgo: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  let timeAgo = '';

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <PostDate>{timeAgo}</PostDate>
    </span>
  );
};

export default TimeAgo;
