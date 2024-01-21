import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, fillServiceField, clearServiceField } from '../actions/actionCreators';
import { RiEditLine } from "react-icons/ri";

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const input = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearServiceField());
  }

  const handleEdit = (id) => {
    const item = items.find(item => item.id === id);
    dispatch(fillServiceField(item));
  }

  const filtered = !input.name ?
    items :
    items.filter(item => item.name.toLowerCase().includes(input.name.toLowerCase().trim()));

  return (
    <ul>
      {filtered.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <RiEditLine style={{ margin: '0px 10px' }} onClick={() => handleEdit(o.id)} />
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
