import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';


export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
console.log(comments)
  return (
    <Grid>
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
