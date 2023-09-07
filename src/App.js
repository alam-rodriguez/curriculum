import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import SectionLetf from './components/SectionLetf';
import SectionRigth from './components/SectionRigth';

import './components/css/SectionLeft.css';

function App() {
  return (
    <div className="App container-fluid p-5">
      <main className='m-auto container d-lg-flex flex-lg-wrap'>
        <header className='container bg-warning p-5 border-dark border-bottom shadow-lg w-100'>
          <Header />
        </header>
        <div className='bg-white d-flex flex-column-reverse shadow-lg flex-lg-row flex-lg-row'>
          <section className='border-top n1 border-dark border-2 border-top border-lg-dark border-lg-2 border-lg-end'>
            <SectionLetf />
          </section>
          <section className='border-2 border-dark border-top col-lg-9'>
            <SectionRigth />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
