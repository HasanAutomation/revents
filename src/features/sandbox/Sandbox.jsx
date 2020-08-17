import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { Helmet } from 'react-helmet';
import { openModal } from '../../app/common/modals/modalReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <Helmet>
        <title>Sandbox</title>
      </Helmet>
      <h2>Testing 123</h2>
      <h4>The data is: {data}</h4>
      <Button
        color="green"
        content="Increment"
        onClick={() => dispatch(increment(10))}
      />
      <Button
        color="red"
        content="Decrement"
        onClick={() => dispatch(decrement(10))}
      />
      <Button
        color="teal"
        content="Open Modal"
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </>
  );
};

export default Sandbox;
