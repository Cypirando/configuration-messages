import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getData } from "../../api";
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
        <Button onClick={() => handleEdit(record.id, record)}>Editar</Button>
      ),
      width: 50,
    },
  ];

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idStr = searchParams.get("id");

  const [data, setData] = useState<DataType[]>([]);
  const [message, setMessage] = useState({});

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

  useEffect(() => {
    const fetchMessage = async () => {
      if (idStr) {
        const messageData = await getData(parseInt(idStr));
        setMessage(messageData);
      }
    };

    fetchMessage();
  }, [idStr]);

  const handleEdit = (id: number, record: DataType) => {
    navigate({
      pathname: `/rating-configuration`,
      search: `?id=${id}`,
    });
    window.history.pushState(
      {
        question_text: record.mensagem,
        feedback_text: record.feedback,
      },
      ""
    );
    window.location.reload();
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
