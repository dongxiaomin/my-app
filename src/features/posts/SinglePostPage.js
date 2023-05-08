import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export const SinglePostPage = () => {
    const navigate = useNavigate();

    const { postId } = useParams();

    const post = useSelector(state =>
        state.postsStore.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <h2>页面未找到！</h2>
            </section>
        )
    }
    const handClick = () => {
        navigate(`/dashboard`)
    };
    return (
        <section>
            <Button onClick={handClick}>Return to Dashboard</Button>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
};
