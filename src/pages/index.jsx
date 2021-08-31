import React from 'react';
import Slider from 'react-slick';
import { SearchIcon } from '@heroicons/react/outline';
import {
  Card, Content, Field, Layout, Navigation,
} from '../Modules/Components';
import { SliderArrows } from '../Modules/Helpers';
import Typography from '../Modules/Components/Content/Typography';
import { Footer, Header } from '../Modules/Partails';

const BannerSearch = () => (
  <div className="relative h-3/5">
    <div className="bg-gradient-to-r from-green-400 to-green-50 w-full h-full absolute" />
    <div className="top-0 left-0 absolute bottom-0 right-0 opacity-60">
      <Content.Picture
        alt="builderz"
        src="/images/welcome.jpg"
        layout="fill"
      />
    </div>
    <Layout.Container className="relative h-full">
      <Layout.Row justify="center" direction="col" isFlexWrapped={false} className="h-full">
        <Layout.Col lg="2/4" className="text-white mb-4">
          <Typography type="h1" size="5xl">Welcome To</Typography>
          <Typography type="h1" size="5xl">
            Academy
            <hr className="border-t-4 border-b-2 border-green w-60 -mt-2" />
          </Typography>
          <Typography type="p" className="mt-3">
            Study any topic, anytime. Explore thousands of courses for the lowest price ever!
          </Typography>
        </Layout.Col>
        <Layout.Col lg="2/4">
          <Layout.Row>
            <Layout.Col className="flex-1">
              <Field.Text
                placeHolder="What do you want to learn?"
                type="text"
                validation=""
                name="search"
                FeedBacks={{ invalid: '' }}
              />
            </Layout.Col>
            <Layout.Col className="-ml-9">
              <Field.Button className="text-green h-12 relative">
                <SearchIcon className="w-5 h-5" />
              </Field.Button>
            </Layout.Col>
          </Layout.Row>
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </div>
);

const Features = () => {
  const features = [
    {
      id: 1,
      image: '/images/online-courses.png',
      title: '13 Online Courses',
      content: 'Explore a variety of fresh topics',
    },
    {
      id: 2,
      image: '/images/export-instructions.png',
      title: 'Expert Instruction',
      content: 'Find the right course for you',
    },
    {
      id: 3,
      image: '/images/lifetime-access.png',
      title: 'Lifetime Access',
      content: 'Learn on your schedule',
    },
  ];
  return (
    <section className="bg-green">
      <Layout.Container>
        <Layout.Row align="center" justify="between" className="-mx-2 py-10 text-white">
          {features.map((feature) => (
            <Card.Feature
              key={feature.id}
              title={feature.title}
              image={feature.image}
              content={feature.content}
            />
          ))}
        </Layout.Row>
      </Layout.Container>
    </section>
  );
};
const Customers = () => {
  const customers = [
    {
      id: 1,
      image: '/images/kids.png',
      title: 'Kids',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      id: 2,
      image: '/images/teen.png',
      title: 'Teen',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      id: 3,
      image: '/images/parent.png',
      title: 'Parents',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      id: 4,
      image: '/images/lecture.png',
      title: 'Lecture',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
  ];
  return (
    <Layout.Container className="py-14">
      <Layout.Row className="-m-2">
        {customers.map((customer) => (
          <Card.Customer
            key={customer.id}
            title={customer.title}
            image={customer.image}
            content={customer.content}
          />
        ))}
      </Layout.Row>
    </Layout.Container>
  );
};
const Categories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SliderArrows.NextArrow />,
    prevArrow: <SliderArrows.PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };
  const tabList = [
    {
      id: 1,
      title: 'kids',
      class: 'sadasd',
    },
    {
      id: 2,
      title: 'teen',
      class: 'sadasd',
    },
    {
      id: 3,
      title: 'parents',
      class: 'sadasd',
    },
    {
      id: 4,
      title: 'lecture',
      class: 'sadasd',
    },
  ];
  const panelData = [
    {
      id: 1,
      title: 'English',
      content: '2 Courses',
      image: '/images/cat-1.jpg',
    },
    {
      id: 2,
      title: 'English',
      content: '2 Courses',
      image: '/images/cat-2.jpg',
    },
    {
      id: 3,
      title: 'English',
      content: '2 Courses',
      image: '/images/cat-3.jpg',
    },
    {
      id: 4,
      title: 'English',
      content: '2 Courses',
      image: '/images/cat-1.jpg',
    },
    {
      id: 5,
      title: 'English',
      content: '2 Courses',
      image: '/images/cat-2.jpg',
    },
  ];
  const tabPanels = [
    <div className="bg-gray-100">
      <Layout.Container className="text-center">
        <Slider {...settings}>
          {panelData.map((item) => (
            <div
              key={item.id}
              className="px-2"
            >
              <Card.Category
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </Layout.Container>
    </div>,
    <div className="bg-gray-100">
      <Layout.Container className="text-center">
        <Slider {...settings}>
          {panelData.map((item) => (
            <div className="px-2">
              <Card.Category
                key={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </Layout.Container>
    </div>,
    <div className="bg-gray-100">
      <Layout.Container className="text-center">
        <Slider {...settings}>
          {panelData.map((item) => (
            <div className="px-2">
              <Card.Category
                key={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </Layout.Container>
    </div>,
    <div className="bg-gray-100">
      <Layout.Container className="text-center">
        <Slider {...settings}>
          {panelData.map((item) => (
            <div className="px-2">
              <Card.Category
                key={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </Layout.Container>
    </div>,
  ];
  return (
    <div className="text-center">
      <Content.Typography type="h1" className="mb-8">
        Categories
      </Content.Typography>
      <Navigation.Tab
        parentClass="mx-auto border rounded-full p-2 inline-flex"
        className="p-2 rounded-full"
        activeColor="bg-green text-white"
        list={tabList}
        panels={tabPanels}
      />
    </div>
  );
};
const AboutAcademy = () => (
  <div className="bg-gray-100 my-14">
    <Layout.Container className="py-14">
      <Layout.Row className="-m-2" align="center">
        <Layout.Col lg="1/2" className="w-full p-2">
          <Content.Typography type="h1" className="pb-3">About Our Academy</Content.Typography>
          <Content.Typography type="p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Donec odio. Quisque eros. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </Content.Typography>
        </Layout.Col>
        <Layout.Col lg="1/2" className="w-full p-2">
          <Content.Picture src="/images/video.png" width={100} height={100} alt="Builderz" />
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </div>
);
const PopularCourses = () => {
  const panelData = [
    {
      id: 1,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-1.jpg',
    },
    {
      id: 2,
      title: 'Adobe Illustrator CC - Essentials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-2.jpg',
    },
    {
      id: 3,
      title: 'How To Use Color Like A Pro',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-3.jpg',
    },
    {
      id: 4,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-1.jpg',
    },
    {
      id: 5,
      title: 'Adobe Illustrator CC - Essentials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-2.jpg',
    },
    {
      id: 6,
      title: 'How To Use Color Like A Pro',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-3.jpg',
    },
  ];
  return (
    <div className="text-center">
      <Content.Typography type="h1" className="mb-2 px-2">Popular Courses</Content.Typography>
      <Content.Typography type="p" className="mb-8 px-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        <br />
        Quisque volutpat mattis eros.
      </Content.Typography>
      <Layout.Container>
        <Layout.Row align="stretch" className="-m-2">
          {panelData.map((item) => (
            <Layout.Col md="1/2" lg="1/3" key={item.id} className="w-full p-2">
              <Card.Course
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </Layout.Col>
          ))}
        </Layout.Row>
      </Layout.Container>
      <Navigation.Anchor className="text-green border border-green mt-5 p-3 inline-block" href="/">View More</Navigation.Anchor>
    </div>
  );
};
const Activities = () => {
  const panelData = [
    {
      id: 1,
      title: 'Activity Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/activity-1.jpg',
    },
    {
      id: 2,
      title: 'Activity Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/activity-2.jpg',
    },
    {
      id: 3,
      title: 'Activity Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/activity-3.jpg',
    },
  ];
  return (
    <div
      className="text-left my-14 py-14 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(https://peterazer.com/tasks/inovola/images/activities.jpg)' }}
    >
      <Layout.Container>
        <div className="text-white">
          <Content.Typography type="h1" className="mb-2 px-2">Featured Activities</Content.Typography>
          <Content.Typography type="p" className="mb-8 px-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            <br />
            Quisque volutpat mattis eros.
          </Content.Typography>
        </div>
        <Layout.Row align="stretch" justify="center" className="-m-2">
          {panelData.map((item) => (
            <Layout.Col md="1/2" lg="1/3" key={item.id} className="w-full p-2">
              <Card.Activity
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </Layout.Col>
          ))}
        </Layout.Row>
      </Layout.Container>
      <div className="text-center">
        <Navigation.Anchor className="text-white bg-green mt-5 p-3 inline-block" href="/">
          View More
        </Navigation.Anchor>
      </div>
    </div>
  );
};
const LatestCourses = () => {
  const panelData = [
    {
      id: 1,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-1.jpg',
    },
    {
      id: 2,
      title: 'Adobe Illustrator CC - Essentials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-2.jpg',
    },
    {
      id: 3,
      title: 'How To Use Color Like A Pro',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-3.jpg',
    },
    {
      id: 4,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-1.jpg',
    },
    {
      id: 5,
      title: 'Adobe Illustrator CC - Essentials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-2.jpg',
    },
    {
      id: 6,
      title: 'How To Use Color Like A Pro',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/course-3.jpg',
    },
  ];
  return (
    <div className="text-center">
      <Content.Typography type="h1" className="mb-2 px-2">Latest Courses</Content.Typography>
      <Content.Typography type="p" className="mb-8 px-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        <br />
        Quisque volutpat mattis eros.
      </Content.Typography>
      <Layout.Container>
        <Layout.Row align="stretch" className="-m-2">
          {panelData.map((item) => (
            <Layout.Col md="1/2" lg="1/3" key={item.id} className="w-full p-2">
              <Card.Course
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </Layout.Col>
          ))}
        </Layout.Row>
      </Layout.Container>
      <Navigation.Anchor className="text-green border border-green mt-5 p-3 inline-block" href="/">View More</Navigation.Anchor>
    </div>
  );
};
const ClientReview = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrows.NextArrow />,
    prevArrow: <SliderArrows.PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };
  const panelData = [
    {
      id: 1,
      name: 'Julie Bailey',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-1.png',
      location: 'Germany, Berlin',
    },
    {
      id: 2,
      name: 'Jacob Rivera',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-2.png',
      location: 'Germany, Berlin',
    },
    {
      id: 3,
      name: 'Jasmine Miller',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-3.png',
      location: 'Germany, Berlin',
    },
    {
      id: 4,
      name: 'Julie Bailey',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-1.png',
      location: 'Germany, Berlin',
    },
    {
      id: 5,
      name: 'Jacob Rivera',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-2.png',
      location: 'Germany, Berlin',
    },
    {
      id: 6,
      name: 'Jasmine Miller',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/review-3.png',
      location: 'Germany, Berlin',
    },
  ];
  return (
    <div className="text-center bg-gray-100 py-14 my-14">
      <Content.Typography type="h1" className="mb-2 px-2">What Our Client Saying</Content.Typography>
      <Content.Typography type="p" className="mb-8 px-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        <br />
        Quisque volutpat mattis eros.
      </Content.Typography>
      <Layout.Container>
        <Slider {...settings}>
          {panelData.map((item) => (
            <div className="px-2" key={item.id}>
              <Card.Review
                title={item.title}
                content={item.content}
                name={item.name}
                location={item.location}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </Layout.Container>
    </div>
  );
};
const Blog = () => {
  const panelData = [
    {
      id: 1,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/blog-1.png',
    },
    {
      id: 2,
      title: 'Adobe Illustrator CC - Essentials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/blog-2.png',
    },
    {
      id: 3,
      title: 'How To Use Color Like A Pro',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/blog-3.png',
    },
    {
      id: 4,
      title: 'Sewing 101',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      image: '/images/blog-4.png',
    },
  ];
  return (
    <div className="text-center">
      <Content.Typography type="h1" className="mb-2 px-2">Latest Blog</Content.Typography>
      <Content.Typography type="p" className="mb-8 px-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        <br />
        Quisque volutpat mattis eros.
      </Content.Typography>
      <Layout.Container>
        <Layout.Row align="stretch" className="-m-2">
          {panelData.map((item) => (
            <Layout.Col md="1/2" lg="1/4" key={item.id} className="w-full p-2">
              <Card.Blog
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </Layout.Col>
          ))}
        </Layout.Row>
      </Layout.Container>
    </div>
  );
};

function Home() {
  return (
    <>
      <Header />
      <BannerSearch />
      <Features />
      <Customers />
      <Categories />
      <AboutAcademy />
      <PopularCourses />
      <Activities />
      <LatestCourses />
      <ClientReview />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
