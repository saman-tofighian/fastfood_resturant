import Header from '@/Components/Header';
import Menu from '@/Components/Menu';
import Motto from '@/Components/Motto';

function Home() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden container'>
        <Motto />
        <Menu />
      </main>
    </>
  );
}

export default Home;
