import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmltype?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean | undefined;
  laoding?: boolean | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
};

const CustomButton = ({
  children,
  htmltype = "button",
  type,
  danger,
  laoding,
  shape,
  icon,
  onClick,
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmltype}
        type={type}
        danger={danger}
        loading={laoding}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
