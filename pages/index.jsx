import Banner from '@/Components/Banner';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Menu from '@/Components/Menu';
import MobileApp from '@/Components/MobileApp';
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
        <MobileApp />
        <Banner />
        <Footer />
      </main>
    </>
  );
}

export default Home;
