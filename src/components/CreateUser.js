import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export default function CreateUser({ props }) {
  return (
    <Create {...props} title="Create a New User">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
}
