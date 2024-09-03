import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="relative flex flex-row items-center justify-between w-10/12 gap-5 py-8 text-gray-100 border-gray-700 lg:max-w-screen-md sm:pb-8 bg-opacity-60 lg:gap-0">
        <div>
          <h1>
            <Link href="/">
              <strong> &lt; VieryN &#47;&gt;</strong>
            </Link>
          </h1>
        </div>

        <div className="ml-[-0.80rem]">
          <MobileMenuNav />

          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
