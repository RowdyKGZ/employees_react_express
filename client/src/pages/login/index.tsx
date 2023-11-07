import { Card, Form, Row, Space, Typography } from "antd";
import { useState } from "react";

import Layout from "../../components/layout";
import CustomInput from "../../components/custom-input";
import PasswordInput from "../../components/password-input/input";
import CustomButton from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../path";
import { UserDataType, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const onLogin = async (data: UserDataType) => {
    try {
      await loginUser(data).unwrap();

      navigate(PATH.home);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={onLogin}>
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

            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
