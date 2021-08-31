import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  Content, Field, Layout, Navigation,
} from '../Modules/Components';
import { UseCurrentLocation, UseFormEvents } from '../Modules/Hooks';
import Form from '../Modules/Layouts/Form';
import { States } from '../Modules/Store';

function Signup() {
  const {
    // eslint-disable-next-line no-unused-vars
    state, dispatch, changeEvent, blurEvent,
  } = UseFormEvents({ ...States.REGISTER });
  const { location } = UseCurrentLocation();
  const {
    data, validation, disabled, formFeedback,
  } = state;
  const [country, setCountry] = useState(null);
  /// ///////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!country && location) setCountry(location);
  }, [location, country]);
  /// ///////////////////////////////////////////////////////////////
  const formInputs = [
    {
      placeHolder: 'Student',
      type: 'radio',
      value: 'Student',
      name: 'accountType',
      image: '/images/student.png',
      col: 'w-1/3',
    },
    {
      placeHolder: 'Parents',
      type: 'radio',
      value: 'Parents',
      name: 'accountType',
      image: '/images/parents.png',
      col: 'w-1/3',
    },
    {
      placeHolder: 'Instructor',
      type: 'radio',
      value: 'Lecture',
      name: 'accountType',
      image: '/images/instructor.png',
      col: 'w-1/3',
    },
    {
      placeHolder: 'First Name*',
      type: 'text',
      feedBack: '',
      validation: validation.firstName,
      value: data.firstName,
      name: 'firstName',
      col: 'w-1/2',
    },
    {
      placeHolder: 'Last Name*',
      type: 'text',
      feedBack: '',
      validation: validation.lastName,
      value: data.lastName,
      name: 'lastName',
      col: 'w-1/2',
    },
    {
      placeHolder: 'E-Mail Address*',
      type: 'email',
      feedBack: '',
      validation: validation.email,
      value: data.email,
      name: 'email',
    },
    {
      placeHolder: 'Mobile Number*',
      type: 'number',
      feedBack: '',
      validation: validation.mobile,
      value: data.mobile,
      name: 'mobile',
    },
    {
      placeHolder: 'Birth Date*',
      type: 'date',
      feedBack: '',
      validation: validation.date,
      value: data.date,
      name: 'date',
    },
    {
      placeHolder: 'Password*',
      type: 'password',
      feedBack: '',
      validation: validation.password,
      value: data.password,
      name: 'password',
    },
  ];
  /// ///////////////////////////////////////////////////////////////
  const clickEvent = () => {};
  /// ///////////////////////////////////////////////////////////////
  return (
    <Layout.Row justify="stretch" className="h-full">
      <Layout.Col xl="3/5" lg="1/2">
        <Content.Picture layout="fill" alt="Builderz" src="/images/login.jpg" />
      </Layout.Col>
      <Layout.Col xl="2/5" lg="1/2" className="sm:p-10 p-5">
        <Layout.Row>
          <Layout.Col className="w-full text-center">
            <div className="w-40 mx-auto">
              <Content.Picture layout="responsive" width={100} height={30} alt="Builderz" src="/images/logo.jpg" />
            </div>
            <Content.Typography type="h2" className="py-5">Sign Up</Content.Typography>
          </Layout.Col>
          <Layout.Col>
            <Form submitFeedBack={formFeedback} className="flex flex-wrap">
              {formInputs.map((input) => (
                <div className={classNames('mb-2 px-2 w-full', input.col && `sm:${input.col}`)} key={input.name}>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {input.type === 'radio'
                    ? (
                      <Field.Radio
                        image={input.image}
                        checked={data.accountType === input.value}
                        placeHolder={input.placeHolder}
                        value={input.value}
                        name={input.name}
                        changeEvent={(e) => changeEvent(e.target)}
                      />
                    ) : input.type === 'number'
                      ? (
                        <Field.Phone
                          placeHolder={input.placeHolder}
                          feedBack={input.feedBack}
                          validation={input.validation}
                          value={input.value}
                          name={input.name}
                          changeEvent={(e) => changeEvent(e.target)}
                          blurEvent={(e) => blurEvent(e.target)}
                          countryEvent={setCountry}
                        />
                      ) : (
                        <Field.Text
                          className="border"
                          hasLabel
                          key={input.name}
                          placeHolder={input.placeHolder}
                          type={input.type}
                          feedBack={input.feedBack}
                          validation={input.validation}
                          value={input.value}
                          name={input.name}
                          changeEvent={(e) => changeEvent(e.target)}
                          blurEvent={(e) => blurEvent(e.target)}
                        />
                      )}
                </div>
              ))}
              <div className="w-full text-center px-2">
                <Field.Button
                  className="h-12 bg-green text-white w-full rounded mt-2"
                  disabled={disabled}
                  clickEvent={clickEvent}
                >
                  Sign Up
                </Field.Button>
                <div className="w-full mt-3">
                  <Content.Typography type="p">
                    Already have an account?
                    <Navigation.Anchor
                      href="/login"
                      className="text-yellow-500 pl-2"
                    >
                      Login
                    </Navigation.Anchor>
                  </Content.Typography>
                </div>
              </div>
            </Form>
          </Layout.Col>
        </Layout.Row>
      </Layout.Col>
    </Layout.Row>
  );
}

export default Signup;
