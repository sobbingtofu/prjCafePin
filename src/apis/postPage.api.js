import supabase from './supabase';

export const fetchReviewItem = async (post_id) => {
  const postResponse = await supabase.from('reviews').select().eq('id', `${post_id}`);

  const userResponse = await supabase.from('users').select().eq('id', `${postResponse.data[0].user_id}`);
  return { post: postResponse.data[0], user: userResponse.data[0] };
};
