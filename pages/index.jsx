import Header from '@/Components/Header';
import Menu from '@/Components/Menu';
import Motto from '@/Components/Motto';
import SaleOff from '@/Components/SaleOff';

function Home() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <Motto />
        <Menu />
        <SaleOff />
      </main>
    </>
  );
}

export default Home;
