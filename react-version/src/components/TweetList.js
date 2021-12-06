import React from 'react';
import RenderTweet from './Tweet.js';
import { tweet } from './Tweet.js';

function TweetList(){
  return (
    <section class="tweets">
      {RenderTweet(tweet)}
      {RenderTweet(tweet)}
    </section>
  );
}

export default TweetList;