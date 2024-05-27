import React, { useEffect, useState } from 'react';
import "./Tabel.css"

import axios from 'axios';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";

import { icon } from '@fortawesome/fontawesome-svg-core';
import { Table, Popconfirm, Button, Space, Form, Input } from 'antd';

import Register from './register';
import { render } from '@testing-library/react';


function Tabel() {


  const [loading, setLoading] = useState(false)
  const [editingKey, setEditingKey] = useState('')
  const [editRow, setEdit] = useState(false)
  const [form] = Form.useForm()


  const navigate = useNavigate();
  // Edite user

  // sherche user

  const searchUser = (event) => {
    const newData = filterData.filter(record => record.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setUSerData(newData)

  }
  const [userData, setUSerData] = useState([])
  const [filterData, setFilterData] = useState([]);
  // aficher user


  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {

    try {
      setLoading(true)
      const result = await axios.get(`/api/dashboard`);
      // console.log(result.data.users)

      setUSerData(result.data.users)
      setFilterData(result.data.users)

      setLoading(false)
      // setInfo(result.data.users)
      // console.log(result.data.users.next_page_url)

    } catch (error) {
      console.log("mage chi")
    }

  }





  // suprimer user
  const deleteUser = async (id) => {

    // axios.get('/sanctum/csrf-cookie').then(response => {
    axios.delete(`/api/delete/` + id).then(res => {


      const newUserData = userData.filter((item) => {
        return (
          item.id !== id
        )
      })
      setUSerData(newUserData)

      navigate('/dashbord');

      swal("Success", res.data.message, "success");

    });

    // });

  }

  const modifiedData = userData.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    comment: body,
  }))


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Nom",
      dataIndex: "name",
      align: "center",
      editable: true,
    },
    ,
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editable: true,
    },

    {
      title: "Type",
      dataIndex: "role_as",
      align: "center",
      editable: true,
    },

    {
      title: "Action",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record)
        return modifiedData.length >= 1 ? (
          <Space>
            <Popconfirm title="sur you delete?"
              onConfirm={() => deleteUser(record.id)}>
              <Button type='primary' danger>
                delete
              </Button>

            </Popconfirm>

            <span>
              <Space size="middle">
                <Link to={`/edit/${record.id}`} > <Button type='primary'>
                  Edit
                </Button></Link>
              </Space>
            </span>



          </Space>
        ) : null






      }

    },



  ]
  const isEditing = (record) => {
    return record.key === editingKey;
  }
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })



  return (
    <body id="page-top">
      <div className=''>

        <Register />

        <div className="d-sm-flex align-items-center justify-content-between mb-4">

          <form
            className="d-none d-sm-inline-block btn btn-sm shadow-sm">
            <div className="input-group ">
              <input type="text" className="form-control border-0 small " placeholder="Search for..."
                aria-label="Search" aria-describedby="basic-addon2" onChange={searchUser} />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>


        <Table
          columns={mergedColumns} dataSource={modifiedData} bordered loading={loading}
        >

        </Table>


      </div>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
    </body>




  )
}
export default Tabel

