import React from "react";
import { Group, Avatar } from "@mantine/core";

const User = ({ user }) => {
  return (
    <Group className="group">
      <Avatar radius="xl" className="avatar">
        {user?.user.name[0]}
        {user?.user.name[1]}
      </Avatar>
      <div style={{ flex: 1 }}>
        <p>{user?.user.email}</p>
      </div>
    </Group>
  );
};

export default User;
