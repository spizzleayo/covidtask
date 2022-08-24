import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataBoard from "./components/DataBoard";
import { fetchData } from "./redux/dataSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { data } = useSelector(({ data }) => ({ data }));
  console.log({ data });
  return (
    <>
      <p>Hello World</p>
      <DataBoard />
    </>
  );
}
