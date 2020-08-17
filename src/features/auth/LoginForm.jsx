import React from 'react';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInUser } from './authActions';
import { closeModal } from '../../app/common/modals/modalReducer';

const LoginForm = () => {
  const dispatch=useDispatch();
  return (
    <ModalWrapper size="mini" header="Sign In to Re-vents">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values,{setSubmitting}) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal())
        }
      
      }
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Enter your email" />
            <MyTextInput
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type='submit' content='Login' fluid size='large' color='teal'/>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
