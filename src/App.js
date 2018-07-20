import React from 'react';
import Posts from './components/Posts';
import Header from './components/Header';

import './App.css';

const posts = [
  {
    id: 1,
    name: 'Cara que Mora logo ali',
    post: 'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.',
    create_at: 3,
    photo: 'https://pppaudienciadatv.files.wordpress.com/2012/03/todo_mundo_odeia_chris.jpg',
  },
  {
    id: 2,
    name: 'Cara que Mora logo ali',
    post: 'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.',
    create_at: 10,
    photo: 'https://pppaudienciadatv.files.wordpress.com/2012/03/todo_mundo_odeia_chris.jpg',
  },
  {
    id: 3,
    name: 'Cara que Mora logo ali',
    post: 'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.',
    create_at: 15,
    photo: 'https://pppaudienciadatv.files.wordpress.com/2012/03/todo_mundo_odeia_chris.jpg',
  },
  {
    id: 4,
    name: 'Cara que Mora logo ali',
    post: 'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.',
    create_at: 1,
    photo: 'https://pppaudienciadatv.files.wordpress.com/2012/03/todo_mundo_odeia_chris.jpg',
  },
];

const App = () => (
  <div>
    <Header />
    <Posts data={posts} />
  </div>
);

export default App;
