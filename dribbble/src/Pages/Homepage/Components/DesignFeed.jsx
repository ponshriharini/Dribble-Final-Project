import React from 'react';
import FeedExploreButton from './FeedExploreButton';
import FeedHeader from './FeedHeader';
import FeedCards from './FeedCards';

function DesignFeed() {
    return ( 
        <div className='feed-container'>
            <FeedHeader />
            <FeedCards />
            <FeedExploreButton />
        </div>
     );
}

export default DesignFeed;