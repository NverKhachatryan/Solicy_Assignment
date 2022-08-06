import React from "react";
import "antd/dist/antd.min.css";
import { Space, Table } from "antd";
import { useParams } from 'react-router-dom';


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
    title: "Updated On",
    dataIndex: "UpdatedOn",
    key: "UpdatedOn",
  },
];
const data = [
  {
    key: "1",
    Id: "1",
    name: "Account 1",
    CreatedOn: "5-8-2021",
    Owner: "User 1",
    UpdatedOn: "5-8-2021",
  },
  {
    key: "2",
    Id: "2",
    name: "Account 2",
    CreatedOn: "5-8-2021",
    Owner: "User 2",
    UpdatedOn: "5-8-2021",
  },
  {
    key: "3",
    Id: "3",
    name: "Account 1",
    CreatedOn: "5-8-2021",
    Owner: "User 3",
    UpdatedOn: "5-8-2021",
  },
];

const AccountId = () => {
    const { id } = useParams();
    const filteredData = data.filter(item => item.Id === id);
    return <Table columns={columns} dataSource={filteredData} />;
}
export default AccountId;
