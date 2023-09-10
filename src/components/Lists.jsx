import { Prospect } from './Prospect';

export const Lists = ({ prospects, setProspect }) => {
  return (
    <>
      {prospects.length === 0 ? (
        <>
          <div className='md:w-1/2 lg:w-3/5 p-5 md:h-screen overflow-y-scroll'>
            <h1 className='text-3xl text-center mb-4'>Aqui vera sus prospectos</h1>
          </div>
        </>
      ) : (
        <div className='md:w-1/2 lg:w-3/5 p-5 md:h-screen overflow-y-scroll'>
          <h1 className='text-3xl text-center mb-4'>Listado prospectos</h1>
          {prospects.map((prospect) => {
            return <Prospect key={prospect.id} prospect={prospect} setProspect={setProspect} />;
          })}
        </div>
      )}
    </>
  );
};
