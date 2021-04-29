import './App.css';
import { BlogContent } from './components/BlogContent/BlogContent';
import { Footer } from './components/Fotter/Footer';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <div className="App">

      <Header />

      <main>
      <BlogContent/>
      </main>

      <Footer
      year={new Date().getFullYear()}
      />
      
    </div>
  );
}

