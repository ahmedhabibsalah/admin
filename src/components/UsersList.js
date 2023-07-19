import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  TextField,
} from "react-admin";

export default function UsersList({ props }) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
}
