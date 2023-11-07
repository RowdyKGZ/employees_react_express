import { Alert } from "antd";

type PropsType = {
  message?: string;
};

export const ErrorMessage = ({ message }: PropsType) => {
  if (!message) {
    return null;
  }

  return <Alert message={message} type="error" />;
};
