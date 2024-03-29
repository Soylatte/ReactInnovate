import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }

  return <nav>
    <ol>
      {lis}

    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Header(props) {
  return <header>
    <h1><a href="/" onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();

    }}>{props.title}</a></h1>
  </header>
}

function App() {

  const mode = 'WELCOME';
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },

  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="welcome" body="hello"></Article>

  } else if (mode === 'READ') {
    content = <Article title="welcome" body="hello,Read"></Article>

  }
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="welcome" body="hello"></Article>
    </div>
  );


}

export default App;
