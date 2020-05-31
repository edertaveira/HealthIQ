export const SEARCH = "SEARCH";
export const SAVE_POSTS = "SAVE_POSTS";

export function searching(value) {
  return { type: SEARCH, value };
}
export function savePosts(value) {
  return { type: SAVE_POSTS, value };
}
