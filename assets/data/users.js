/*export default [
    {
        id: '1',
        name: 'Tina',
        image:
            'https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-6.jpg',
        content: 'Woohoo! Just got a delicious dinner -- I like it medium rare! Gotta get that protein! #steak #dinner'
    },
    {
        id: '2',
        name: 'Tahsin',
        image:
            'https://secureservercdn.net/45.40.153.24/m28.ed7.myftpupload.com/wp-content/uploads/2022/02/Cargo-HandBurger-400x516.jpg',
        content: 'This burger is so GOOD! Will come back to eat again. #hamburger #lunch'
    },
    {
        id: '3',
        name: 'Justin',
        image:
            'https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg',
        content: 'Delicious pizza -- Vegetables go well with pizza! #pizza #dinner'
    },
    {
        id: '4',
        name: 'Liam',
        image:
            'https://www.halfbakedharvest.com/wp-content/uploads/2021/04/One-Pot-Creamy-Penne-Alfredo-with-Spicy-Arugula-1.jpg',
        content: 'Alfredo is my favorite flavor of pasta. It tastes so GOOD. I can eat it all day! #pasta #alfredo #lunch'
    },
] */

import React from 'react';
import axios from 'axios';


export default class PostList extends React.Component {
  state = {
    posts: []
  }

   
  componentDidMount() {
    axios.get(`http://localhost:3000/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.posts
            .map(post =>
              <li key={post.id}>{post.image}{post.content}</li>
            )
        }
      </ul>
    )
  }
}