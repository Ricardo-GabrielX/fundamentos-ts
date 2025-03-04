
import styles from './App.module.css'
import  './global.css';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';

const posts: PostType[] = [
  {
    id:1,
    author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/129549638?v=4',
        name: 'Ricardo Gabriel',
        role: 'Estudante de programação'
      },
    content: [
      {type: 'paragraph', content: 'Fala galeraa👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-01 10:15:05'),
  },
  {
    id:2,
    author:
      {
        avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-129549638-1728329132987.jpg',
        name: 'Ricardo',
        role: 'Estudante de programação'
      },
    content: [
      {type: 'paragraph', content: 'Fala galeraa👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-01 10:15:05'),
  },
]



function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />

            );
          })}
        </main>
      </div>
    </>
  )
}

export default App
