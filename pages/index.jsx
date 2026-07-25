import Header from '@/Components/Header';
import Motto from '@/Components/Motto';

function Home() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden container'>
        <Motto />
      </main>
    </>
  );
}

export default Home;
