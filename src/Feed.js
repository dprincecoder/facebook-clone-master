import React, { useState, useEffect } from 'react';
import './Feed.css'
import PostInput from './PostInput';
import StoryReel from './StoryReel';
import Post from './Post'
// import plane from './asset/plane.jpg'
// import vacation from './asset/vacation.jpg'
// import mountain from './asset/mountain.jpg'
// import dream from './asset/dream vacation.jpeg'
import { useStateValue } from './StateProvider';
import DB from './Firebase'

const Feed = () => {
        //use usestate hook
    const [{ user }, dispatch] = useStateValue();

    const [posts, setPosts] = useState([]);
    
    //use useEffect to load user post when window loads
  useEffect(() => {
        DB.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        })
    }, [])
    

    return (
        <div className="feed">
            {/* story display section */}
            <StoryReel/>

            {/* posts inputs section*/}
            <PostInput/>

            {/* post per user section */}
            {posts.map(post => (
                <Post key={post.data.id} profilePic={post.data.profilePic}
                    massage={post.data.massage} timestamp={post.data.timestamp}
                    username={post.data.username} image={post.data.image}
                />
           ))};
        </div>
    )
}

export default Feed;
