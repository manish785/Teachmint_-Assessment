import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../utils/constants';

const Post = () => {
    const [postInfo, setPostInfo] = useState([]);
    const { postId } = useParams();

    useEffect(() => {
        getPostInfo();
    }, []);

    const getPostInfo = async () => {
       const data = await fetch(post);
       const postDetails = await data.json();
       setPostInfo(postDetails);
    }

    console.log('bill gates bhai', postInfo);

    if(postInfo.length === 0){
        return <h1>Post Details Loading</h1>
    }

    return (
        
        <div className="flex justify-start items-start h-screen p-0">
        <div className="bg-purple-100 p-8 rounded-lg shadow-lg w-2/4 h-2/5">
            <h4 className="text-lg mb-4">Post title: {postInfo[postId].title}</h4>
            <h4 className="text-lg mb-4">Content: {postInfo[postId].body}</h4>
            {/* Other properties */}
        </div>
    </div>
        
    )
}


export default Post;