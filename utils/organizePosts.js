export function organizePosts(posts) {
  const organizedPosts = {};

  for (const post of posts) {
    const coordinates = `${post.address}`;
    if (organizedPosts[coordinates]) {
      organizedPosts[coordinates].push(post);
    } else {
      organizedPosts[coordinates] = [post];
    }
  }

  const result = [];
  for (const coordinates in organizedPosts) {
    if (organizedPosts.hasOwnProperty(coordinates)) {
      const postsArray = organizedPosts[coordinates];

      result.push({ children: postsArray.length, posts: postsArray });
    }
  }
  return result;
}
