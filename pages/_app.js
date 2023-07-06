import "@/styles/index.scss";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
