import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export default function EditUser({ props }) {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
}
