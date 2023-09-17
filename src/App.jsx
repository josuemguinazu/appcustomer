import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Lists } from './components/Lists';

const App = () => {
  const [prospects, setProspects] = useState([]);
  const [prospect, setProspect] = useState({});

  const deleteProspect = (id) => {
    const updatedProspects = prospects.filter((prosp) => prosp.id !== id);
    setProspects(updatedProspects);
  };

  return (
    <>
      <div>
        <Header />
        <div className='mt-10 md:flex'>
          <Form prospects={prospects} prospect={prospect} setProspects={setProspects} />
          <Lists prospects={prospects} setProspect={setProspect} deleteProspect={deleteProspect} />
        </div>
      </div>
    </>
  );
};

export default App;
