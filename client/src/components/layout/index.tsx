import React from "react";
import { Layout as LayoutAntd } from "antd";

import Header from "../header";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <Header />
      <LayoutAntd.Content style={{ height: "100%" }}>
        {children}
      </LayoutAntd.Content>
    </div>
  );
};

export default Layout;
