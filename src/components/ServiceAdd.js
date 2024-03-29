import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeServiceField,
  addService,
  editService,
  clearServiceField,
} from "../actions/actionCreators";

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    !item.id
      ? dispatch(addService(item.name, item.price))
      : dispatch(editService(item));

    dispatch(clearServiceField());
  };

  const handleClick = () => {
    dispatch(clearServiceField());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit" className="btn">Save</button>
      <button
        type="button"
        className={!item.id ? "hidden" : "btn"}
        onClick={handleClick}
      >
        Cancel
      </button>
    </form>
  );
}

export default ServiceAdd;