interface RedditSavedPostsJson {
  kind: string;
  data: {
    dist: number;
    children: Array<redditData>;
  };
}

interface redditData {
  kind: string;
  data: {
    subreddit: string;
    subreddit_name_prefixed: string;
    title: string;
    selftext: string;
    author: string;
    url: string;

    ups: number;
    upvote_ratio: number;
    num_comments: number;

    over_18: boolean;
  };
}

export type { RedditSavedPostsJson, redditData };
