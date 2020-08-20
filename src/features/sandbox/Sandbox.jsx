import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { Helmet } from 'react-helmet';
import { openModal } from '../../app/common/modals/modalReducer';
import { useState } from 'react';

const Sandbox = () => {
  const [target,setTarget]=useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const {loading}=useSelector(state=>state.async);
  return (
    <>
      <Helmet>
        <title>Sandbox</title>
      </Helmet>
      <h2>Testing 123</h2>
      <h4>The data is: {data}</h4>
      <Button
        color="green"
        name='increment'
        loading={loading && target==='increment'}
        content="Increment"
        onClick={(e) =>{
          dispatch(increment(10))
          setTarget(e.target.name)
        } }
      />
      <Button
        color="red"
        name='decrement'
        loading={loading && target==='decrement'}
        content="Decrement"
        onClick={(e) => {
          dispatch(decrement(10))
          setTarget(e.target.name)
        }}
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
