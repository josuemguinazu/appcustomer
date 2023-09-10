import { useState, useEffect } from 'react';
import Error from './Error';

export const Form = ({ prospects, prospect, setProspects }) => {
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [obs, setObs] = useState('');
  const [emptyField, setEmptyField] = useState(false);

  const prospectData = [company, contact, tel, email, date, obs];

  const generateId = () => {
    {
      let id = Math.random().toString(36).substring(2);
      return id;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prospectData.includes('')) {
      setEmptyField(true);
      return;
    }
    setEmptyField(false);

    if (prospect.id) {
      //editar registro
    } else {
      //nuevo registro
      setProspects([...prospects, { id: generateId(), company, contact, tel, email, date, obs }]);
    }
    //reset form
    setCompany('');
    setContact('');
    setTel('');
    setEmail('');
    setObs('');
  };

  useEffect(() => {
    if (Object.keys(prospect).length > 0) {
      setCompany(prospect.company);
      setContact(prospect.contact);
      setTel(prospect.tel);
      setEmail(prospect.email);
      setDate(prospect.date);
      setObs(prospect.obs);
    }
  }, [prospect]);

  return (
    <>
      <div className='md:w-1/2 lg:w-2/5 p-5'>
        <h2 className='text-3xl mb-4 text-center'>Agregar prospecto</h2>

        <form onSubmit={handleSubmit} action='' className='bg-white shadow-md rounded-lg py-8 px-4'>
          <div className='mb-5'>
            <label htmlFor='empresa' className='text-gray-700 block uppercase font-bold mb-2'>
              Empresa
            </label>
            <input
              className='border-2 p-2 mt-2 w-full placeholder-grey-400 rounded-md'
              type='text'
              name=''
              id='empresa'
              placeholder='Nombre de la empresa'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='prospescto' className='text-gray-700 block uppercase font-bold mb-2 '>
              Nombre contacto
            </label>
            <input
              className='border-2 p-2 mt-2 w-full placeholder-grey-400 rounded-md'
              type='text'
              name=''
              id='prospecto'
              placeholder='Nombre de contacto'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='tel' className='text-gray-700 block uppercase font-bold mb-2'>
              Teléfono
            </label>
            <input
              className='border-2 p-2 mt-2 w-full placeholder-grey-400 rounded-md'
              type='number'
              name=''
              id='tel'
              placeholder='Teléfono'
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='text-gray-700 block uppercase font-bold mb-2'>
              Email
            </label>
            <input
              className='border-2 p-2 mt-2 w-full placeholder-grey-400 rounded-md'
              type='text'
              name=''
              id='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='fecha' className='text-gray-700 block uppercase font-bold mb-2'>
              Fecha de contacto
            </label>
            <input
              className='border-2 p-2 mt-2 w-full placeholder-grey-400 rounded-md'
              type='date'
              name=''
              id='alta'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='obs' className='text-gray-700 block uppercase font-bold mb-2'>
              Observaciones
            </label>
          </div>
          <textarea
            className='w-full'
            name=''
            id='obs'
            placeholder='Datos relevantes del prospecto'
            value={obs}
            onChange={(e) => setObs(e.target.value)}
          ></textarea>
          <input
            value={prospect.id ? 'Editar informacion' : 'Agregar Paciente'}
            type='submit'
            className='bg-cyan-600 w-full p-3 text-white uppercase font-bold hover:bg-cyan-700 cursor-pointer transition-all rounded-md'
          />
          {/* mensaje de error si no estan completos todos los campos */}
          {emptyField && <Error ErrorMsg={'Todos los campos son obligatorios'} />}
        </form>
      </div>
    </>
  );
};
