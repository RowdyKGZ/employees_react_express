import { Card, Form, Row, Space, Typography } from "antd";

import Layout from "../../components/layout";
import CustomInput from "../../components/custom-input";
import PasswordInput from "../../components/password-input/input";
import CustomButton from "../../components/custom-button";
import { Link } from "react-router-dom";
import { PATH } from "../../path";

const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmltype="submit" laoding={false}>
              Зарегестрируйтесь
            </CustomButton>
          </Form>

          <Space direction="vertical" size="large">
            <Typography.Text>
              Есть аккаунт ?<Link to={PATH.login}> Войти</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Register;
