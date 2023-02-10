import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const TableConfig: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:9000/quiz');
      const responseData = result.data.message.map((item:any, index:number) => ({
        key: index,
        mensagem: item.question_text,
        feedback: item.feedback_text,
      }));
      setData(responseData);
    };

    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 300 }} />
  );
};

export default TableConfig;