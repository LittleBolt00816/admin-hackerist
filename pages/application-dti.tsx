import Layout from "@/components/layout/Layout";
import { Button, Table } from "@mantine/core";
import React from "react";
import dtiVerifyData from "Data/dtiVerifyData.json";
type Props = {};

const ApplicationDTIPage = (props: Props) => {
  const rows = dtiVerifyData.map((element) => (
    <tr key={element.id}>
      <td>{element.ownerName}</td>
      <td>{element.businessName}</td>
      <td>
        <Button color="indigo.6" size="xs">
          View COR
        </Button>
      </td>
      <td>{element.dateSubmiited}</td>
      <td>
        <Button color="green.6">Approve</Button>
      </td>
      <td>
        <Button color="red.6">Reject</Button>
      </td>
    </tr>
  ));

  return (
    <Layout>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Business Name</th>
            <th>COR</th>
            <th>Date Submitted</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Layout>
  );
};

export default ApplicationDTIPage;
