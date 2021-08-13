import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../datas/api';
import { setTodos } from '../../Redux/action';
import TodosWrapper from './TodosWrapper';

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTodos(dispatch);
  }, []);
  const data = useSelector(state=>state.todos);
  return (
    <TodosWrapper>
      <h1>ToDos</h1>
      {data.map((v, i) => {
        return <h3>{v.title}</h3>
      })}
    </TodosWrapper>
  );
};

export default Todos;
