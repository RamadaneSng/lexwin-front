import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "@mantine/core";
import User from "./User";


const AdminNav = ({ user, logout }) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout();
    setLoading(true);
  };
  return (
    <div className="admin-nav">
      <div className="nav-bar">
        <div className="logo">
          <Image
            src="/assets/images/logo 3 copie.png"
            width={80}
            priority
            height={40}
            alt="logo web-menu"
          />
        </div>
        <div className="left">
          <User user={user} />
          <Button
            onClick={handleLogout}
            leftIcon={<AiOutlineLogout size="1.1rem" />}
            loading={loading}
            loaderPosition="right"
            // variant
          >
            Se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
