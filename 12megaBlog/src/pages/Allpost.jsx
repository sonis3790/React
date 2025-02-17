import React, {useState, useEffect} from 'react';
import appwriteService from '../appwrite/configuration'
import { Container, PostCard } from '../components';

function Allpost() {

    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([])
    .then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap '>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-4 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Allpost;