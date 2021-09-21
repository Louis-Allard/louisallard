import React from 'react';
import Menu from '../Components/Menu';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Post from '../Components/Post';
import { blog } from '../lng/fr.js'


const Blog = () => {
    return (
        <div className="blog">
            <Menu />
            <Title text="Mon blog" />
            <div className="data-container">
            <Post title={ blog.title08 } content={ blog.content08 }  date={ blog.date08 } />
            <Post title={ blog.title07 } content={ blog.content07 }  date={ blog.date07 } />
            <Post title={ blog.title06 } content={ blog.content06 }  date={ blog.date06 } />
            <Post title={ blog.title05 } content={ blog.content05 }  date={ blog.date05 } />
            <Post title={ blog.title04 } content={ blog.content04 }  date={ blog.date04 } />
            <Post title={ blog.title03 } content={ blog.content03 }  date={ blog.date03 } />
            <Post title={ blog.title02 } content={ blog.content02 }  date={ blog.date02 } />
            <Post title={ blog.title01 } content={ blog.content01 }  date={ blog.date01 } />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;