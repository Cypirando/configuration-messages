import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  mensagem: string;
  feedback: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mensagem',
    dataIndex: 'mensagem',
    width: 150,
  },
  {
    title: 'Feedback',
    dataIndex: 'feedback',
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    mensagem: `${i} - O que achou do serviço?`,
    feedback: "Otimo!",
  });
}

const TableConfig: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 12 }} scroll={{ y: 240 }} />
);

export default TableConfig;