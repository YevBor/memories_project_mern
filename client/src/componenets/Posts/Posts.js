import React from 'react';
import Post from './Post/Post';
import useStyles from './styles.js';
import {useSelector}from 'react-redux';

export default function Posts() {
    const posts = useSelector((state)=> state.posts);
    const classes = useStyles(); 
    console.log(posts);
    
  return (
    <>
        <h1>POSTS</h1>
        <Post></Post>
        <Post></Post>
    </> 
  )
}
