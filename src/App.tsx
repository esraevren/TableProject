import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import Loader from "./components/Ui/Loader";
import UserCard from "./components/UserCard/UserCard";
import { getUsers } from "./features/users/userSlice";
import "./App.css";
import { Table } from "@mantine/core";
import { TableSort } from "./components/TableSort/TableSort";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { loading, data } = useAppSelector((state) => state);

  return (
    <div className="container ">
      <div>
        {/* {loading ? (
          <Loader />
        ) : (
          data && (
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Addres-street</th>
                  <th>Addres-city</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                </tr>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )} */}
        <TableSort data={[]}/>
      </div>
    </div>
  );
};

export default App;
