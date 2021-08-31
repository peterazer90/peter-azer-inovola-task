import React from 'react';
import {
  HeartIcon, MenuAlt4Icon, ShoppingCartIcon, XIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import {
  Field, Layout, Navigation,
} from '../Components';
import logoImage from '../../../public/images/logo.jpg';
import { UsePopUpEvents } from '../Hooks';

function Header() {
  const navigation = [
    {
      path: '/',
      title: 'Home',
      text: 'home',
    },
    {
      path: '/courses',
      title: 'Our Courses',
      text: 'Courses',
    },
    {
      path: '/activities',
      title: 'Our Activities',
      text: 'Our Activities',
    },
    {
      path: '/testimonials',
      title: 'Testimonials',
      text: 'Testimonials',
    },
    {
      path: '/blog',
      title: 'Our Blog',
      text: 'Blog',
    },
    {
      path: '/Contact',
      title: 'Contact Us',
      text: 'Contact',
    },
  ];
  const navigationRight = [
    {
      path: '/',
      title: 'favorite',
      children: <HeartIcon className="h-5 w-5" />,
    },
    {
      path: '/cart',
      title: 'Shopping Cart',
      children: <ShoppingCartIcon className="h-5 w-5" />,
    },
    {
      path: '/signup',
      title: 'Sign In',
      children: 'Login',
      class: 'mx-1.5 px-3 py-1.5 bg-green text-white',
    },
  ];
  const { active, setActive } = UsePopUpEvents();

  return (
    <header className="w-full bg-white">
      {active
      && (
      <div className="fixed top-16 bottom-0 left-0 right-0 bg-gray-50 z-10 pt-5">
        <Layout.Container className="h-full overflow-y-scroll">
          <Navigation.Menu direction="col" className="text-sm">
            {navigation.map((item) => (
              <>
                <Navigation.List
                  className="w-full text-gray-400 py-2"
                  key={item.path + item.text}
                  title={item.title}
                  path={item.path}
                >
                  {item.text}
                </Navigation.List>
                <div className="border-gray-200 border-t" />
              </>
            ))}
            <div className="w-3/4 mx-auto my-5 text-center">
              <Navigation.Anchor
                className={classNames('w-full px-2 py-2 capitalize bg-green text-white block')}
                href="/signup"
              >
                Login
              </Navigation.Anchor>
            </div>
          </Navigation.Menu>
        </Layout.Container>
      </div>
      )}
      <Layout.Container>
        <Layout.Row align="center" className="h-16 -mx-2">
          <Field.Button className="text-green lg:hidden" clickEvent={() => setActive(!active)}>
            {!active ? <MenuAlt4Icon className="w-6 h-6" /> : <XIcon className="w-6 h-6" />}
          </Field.Button>
          <Layout.Col className="sm:w-52 w-32  px-2 mr-auto">
            <img src={logoImage} alt="Builderz" />
          </Layout.Col>
          <Layout.Col className="px-2">
            <Layout.Row align="center" className="-mx-2 text-gray-500 font-light">
              <Layout.Col className="px-2">
                <Navigation.Menu className="hidden lg:flex">
                  {navigation.map((item) => (
                    <Navigation.List
                      path={item.path}
                      key={item.path}
                      title={item.title}
                      className="px-1.5"
                    >
                      {item.text}
                    </Navigation.List>
                  ))}
                </Navigation.Menu>
              </Layout.Col>
              <Layout.Col className="px-2">
                <Navigation.Menu className="items-center -mx-2">
                  {navigationRight.map((item) => (
                    <Navigation.Anchor
                      key={item.path}
                      className={!item.class ? 'px-1.5' : item.class}
                      href={item.path}
                    >
                      {item.children}
                    </Navigation.Anchor>
                  ))}
                </Navigation.Menu>
              </Layout.Col>
            </Layout.Row>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </header>
  );
}

export default Header;
