import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  mensagem: string;
  feedback: string;
  id: number;
}

const TableConfig: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Mensagem",
      dataIndex: "mensagem",
      width: 150,
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      width: 150,
    },
    {
      title: "Ações",
      dataIndex: "actions",
      render: (text: any, record: DataType) => (
        <Button onClick={() => handleEdit(record.id)}>Editar</Button>
      ),
      width: 50,
    },
  ];
  const navigate = useNavigate();
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:9000/quiz");
      const responseData = result.data.message.map(
        (item: any, index: number) => ({
          key: index,
          mensagem: item.question_text,
          feedback: item.feedback_text,
          id: item.id,
        })
      );
      setData(responseData);
    };

    fetchData();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/rating-configuration?id=${id}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 300 }}
    />
  );
};

export default TableConfig;
