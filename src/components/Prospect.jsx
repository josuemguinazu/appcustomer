export const Prospect = ({ prospect, setProspect, deleteProspect }) => {
  const { company, contact, tel, email, date, obs } = prospect;

  let now = new Date();
  let meetDate = new Date(date);
  let daysSinceMeet = Math.floor((now - meetDate) / 86400000); //86400000 es la cantidad de milisegundos que hay un dia (24hrs)

  return (
    <>
      <div className='bg-white shadow-md py-8 px-4 rounded-lg mt-2.5'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre Empresa: {''}
          <span className='font-normal normal-case'>{company}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre Contacto: {''}
          <span className='font-normal normal-case'>{contact};o</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Teléfono: {''}
          <span className='font-normal normal-case'>{tel}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha contacto: {''}
          <span className='font-normal normal-case'>{date}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Dias desde el ultimo contacto: {''}
          <span className='font-normal normal-case'>{daysSinceMeet}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Observaciones: {''}
          <span className='font-normal normal-case'>{obs}</span>
        </p>
        <div className='flex justify-around'>
          <button
            type='button'
            className='py-2 px-10 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase rounded-md'
            onClick={() => {
              setProspect(prospect);
            }}
          >
            Editar
          </button>
          <button
            type='button'
            className='py-2 px-10 bg-red-700 hover:bg-red-600 text-white font-bold uppercase rounded-md'
            onClick={() => {
              deleteProspect(prospect.id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
