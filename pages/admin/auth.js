import useAuth from "@/hooks/useAuth";
import { Button, Center, PasswordInput, Stack, TextInput } from "@mantine/core";
import React, { useRef, useState } from "react";
import Loading from "../../components/Loading";

const admin = () => {
  const [errors, setErrors] = useState([]);
  const [authLoading, setAuthLoadding] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  // console.log(email, password);

  const { login, isLoading, user } = useAuth({ middleware: "guest" });
  const handleLogin = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();

    login({ email, password, setErrors });
    setAuthLoadding(true);
  };

  if (!user && isLoading) {
    return <Loading />;
  }
  return (
    <div className="admin-auth">
      <Center>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <Stack>
              <TextInput
                placeholder="admin@gmail.com"
                withAsterisk
                label="email"
                ref={emailRef}
                radius={0}
              ></TextInput>
              <PasswordInput
                radius={0}
                ref={passwordRef}
                placeholder="Mot de passe"
                withAsterisk
                label="Mot de passe"
              />
              <Button
                type="submit"
                radius={0}
                loading={authLoading}
                onClick={() => setAuthLoadding(true)}
                loaderPosition="right"
              >
                Se connecter
              </Button>
            </Stack>
          </form>
        </div>
      </Center>
    </div>
  );
};

export default admin;
