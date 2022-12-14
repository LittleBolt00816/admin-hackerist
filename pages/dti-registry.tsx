import Layout from "@/components/layout/Layout";
import { Button, Table } from "@mantine/core";
import React from "react";
import dtiRegistry from "Data/dtiRegistry.json";
type Props = {};

const DTIRegistry = (props: Props) => {
  const rows = dtiRegistry.map((element) => (
    <tr key={element.id}>
      <td>{element.businessName}</td>
      <td>
        <Button color="indigo.6" size="xs">
          View Form
        </Button>
      </td>
      <td>{element.proofOfPayment}</td>
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
            <th>Business Name</th>
            <th>Form</th>
            <th>Proof Of Payment</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Layout>
  );
};

export default DTIRegistry;
