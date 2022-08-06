import React from "react";
import "antd/dist/antd.min.css";
import { Space, Table } from "antd";
import { NavLink } from "react-router-dom";

const columns = [
  {
    title: "Id",
    dataIndex: "Id",
    key: "Id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    key: "CreatedOn",
  },
  {
    title: "Owner",
    dataIndex: "Owner",
    key: "Owner",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <NavLink to={`/accounts/${record.Id}`}>View</NavLink>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    Id: "1",
    name: "Account 1",
    CreatedOn: "5-8-2021",
    Owner: "User 1" 
  },
  {
    key: "2",
    Id: "2",
    name: "Account 2",
    CreatedOn: "5-8-2021",
    Owner: "User 2" 
  },
  {
    key: "3",
    Id: "3",
    name: "Account 3",
    CreatedOn: "5-8-2021",
    Owner: "User 3" 
  },
];

const AccountsPage = () => <Table columns={columns} dataSource={data} />;

export default AccountsPage;
