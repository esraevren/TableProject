import { FC } from "react";
import { Table } from "@mantine/core";
import User from "../../models/userModel";

interface UserProps {
  user: User;
}

const UserCard: FC<UserProps> = (props) => {
  const {
    user: { name, username, id },
  } = props;

  return (
    // <Table>
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Address-street</th>
    //       <th>Address-city</th>
    //       <th>Age</th>
    //       <th>Phone Number</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr key={id}>
    //       <td>{name}</td>
    //       <td>{username}</td>
    //     </tr>
    //   </tbody>
    // </Table>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
        <tr key={id}>
         <td>{name}</td>
         <td>{username}</td>
         <td>{username}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserCard;
