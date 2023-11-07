import { Table } from "antd";
import { Employee } from "@prisma/client";
import { ColumnsType } from "antd/es/table";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { PATH } from "../../path";
import Layout from "../../components/layout";
import CustomButton from "../../components/custom-button";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import { selectUser } from "../../features/auth/authSlice";

const COLUMS: ColumnsType<Employee> = [
  { title: "Имя", dataIndex: "firstName", key: "firstName" },
  { title: "Возраст", dataIndex: "age", key: "age" },
  { title: "Адресс", dataIndex: "address", key: "address" },
];

export const Employess = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetAllEmployeesQuery();

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, user]);

  const goToAddUser = () => navigate(PATH.employeeAdd);

  return (
    <Layout>
      <CustomButton
        type="primary"
        onClick={goToAddUser}
        icon={<PlusCircleOutlined />}
      >
        Добавить сотрудника
      </CustomButton>

      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={COLUMS}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return { onClick: () => navigate(`${PATH.employee}/${record.id}`) };
        }}
      />
    </Layout>
  );
};
