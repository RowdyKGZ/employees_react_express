import { Layout, Space, Typography } from "antd";
import { TeamOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./index.module.css";
import CustomButton from "../custom-button";
import { PATH } from "../../path";

const Hader = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={PATH.home}>
          <CustomButton type={"text"}>
            <Typography.Title level={1}>Сотрудники </Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={PATH.register}>
          <CustomButton icon={<UserOutlined />} type="text">
            Регистрация
          </CustomButton>
        </Link>
        <Link to={PATH.login}>
          <CustomButton icon={<LoginOutlined />} type="text">
            Логин
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Hader;
