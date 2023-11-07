import { Layout, Space, Typography } from "antd";
import { TeamOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import CustomButton from "../custom-button";
import { PATH } from "../../path";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

const Hader = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");

    navigate("/login");
  };

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

      {user.isAuthenticated ? (
        <CustomButton
          type="text"
          icon={<LoginOutlined />}
          onClick={logOutClick}
        >
          Выйти
        </CustomButton>
      ) : (
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
      )}
    </Layout.Header>
  );
};

export default Hader;
