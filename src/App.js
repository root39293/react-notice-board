import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PostForm />
        <PostList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
