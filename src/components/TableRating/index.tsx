import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key: React.Key;
  mensagem: string;
  avaliacao: number;
  id: number;
}

const TableRating: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Mensagem",
      dataIndex: "mensagem",
      width: 250,
    },
    {
      title: "Avaliação",
      dataIndex: "avaliacao",
      width: 100,
    },
  ];

  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:9000/assessment");
      const responseData = result.data.message.map(
        (item: any, index: number) => ({
          key: index,
          mensagem: item.feedback_end,
          avaliacao: item.rating,
          id: item.id,
        })
      );
      setData(responseData);
    };

    fetchData();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 300 }}
    />
  );
};

export default TableRating;
