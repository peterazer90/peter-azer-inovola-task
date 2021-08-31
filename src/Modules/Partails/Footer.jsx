import React from 'react';
import {
  Content, Field, Layout, Navigation,
} from '../Components';
import logoImage from '../../../public/images/logo.jpg';
import Typography from '../Components/Content/Typography';

function Footer() {
  const menuCols = [
    {
      title: 'Quick Links',
      menu: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Contact',
          path: '/',
        },
        {
          title: 'Privacy Policy',
          path: '/',
        },
        {
          title: 'Terms And Condition',
          path: '/',
        },
      ],
    },
    {
      title: 'Social Media',
      menu: [
        {
          title: 'Facebook',
          path: '/',
        },
        {
          title: 'Twitter',
          path: '/',
        },
        {
          title: 'Instagram',
          path: '/',
        },
        {
          title: 'Linkedin',
          path: '/',
        },
      ],
    },
  ];
  return (
    <footer className="pt-14 text-gray-500 w-full">
      <Layout.Container>
        <Layout.Row className="bg-gray-100 md:p-10 p-3 mb-14 rounded" align="center" justify="between">
          <Layout.Col lg="2/4" className="w-full p-2">
            <Typography type="h1">Let Us Inform You About Everything Important Directly.</Typography>
          </Layout.Col>
          <Layout.Col lg="2/4" className="w-full">
            <Layout.Row>
              <Layout.Col className="flex-1">
                <Field.Text
                  placeHolder="Your email address"
                  type="text"
                  validation=""
                  name="search"
                  FeedBacks={{ invalid: '' }}
                />
              </Layout.Col>
              <Layout.Col>
                <Field.Button
                  className="bg-green text-white rounded h-12 -ml-2 relative"
                >
                  Subscribe Now
                </Field.Button>
              </Layout.Col>
            </Layout.Row>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
      <Layout.Container>
        <Layout.Row className="-m-2" justify="between" align="start">
          <Layout.Col className="p-2" lg="1/4" md="1/2">
            <div className="w-52 h-10">
              <Content.Picture src={logoImage} layout="fill" alt="Builderz" />
            </div>
            <Typography type="p" className="mt-3">
              Lorem Ipsum Dolor Sit Amet, Tempor Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo.
            </Typography>
          </Layout.Col>
          {menuCols.map((col) => (
            <Layout.Col
              key={col.title}
              className="p-2"
              lg="auto"
              md="1/2"
            >
              <div className="w-52 h-10">
                <Typography type="h4" className="mt-3">
                  {col.title}
                </Typography>
              </div>
              <Navigation.Menu direction="col">
                {col.menu.map((item) => (
                  <Navigation.List path={item.path} title={item.title} key={item.title}>
                    {item.title}
                  </Navigation.List>
                ))}
              </Navigation.Menu>
            </Layout.Col>
          ))}
          <Layout.Col className="p-2" lg="auto" md="1/2">
            <div className="w-52 h-10">
              <Typography type="h4" className="mt-3">
                Find Us
              </Typography>
            </div>
            <Typography type="p" className="mt-1">
              Address: 8901 MARMORA RAO
            </Typography>
            <Typography type="p" className="mt-1">
              Phone: +143-52-9933631
            </Typography>
            <Typography type="p" className="mt-1">
              Email: academy@example.com
            </Typography>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
      <Layout.Container className="pb-5">
        <hr className="my-5 border-t" />
        <Typography type="strong" className="text-center block">
          © 2020
          <span className="px-1 text-blue-700">BUILDERZ.</span>
          All Rights Reserved.
        </Typography>
      </Layout.Container>
    </footer>
  );
}

export default Footer;
