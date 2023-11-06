import { Card, Form, Row, Space, Typography } from "antd";

import Layout from "../../components/layout";
import CustomInput from "../../components/custom-input";
import PasswordInput from "../../components/password-input/input";
import CustomButton from "../../components/custom-button";
import { Link } from "react-router-dom";
import { PATH } from "../../path";

const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton type="primary" htmltype="submit" laoding={false}>
              Войти
            </CustomButton>
          </Form>

          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет Аккаунта ?<Link to={PATH.register}> Зарегестрироваться</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
