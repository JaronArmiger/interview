import React, { useState, useEffect } from 'react';
import {
  getUsersAndPubs,
} from '../functions/user';
import {
  removePublication,
} from '../functions/publication';
import { 
  List, 
  Divider, 
  Typography,
  Card,
  Table,
  Button,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  LoadingOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { toast } from 'react-toastify';

const { Meta } = Card;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users])

  const loadUsers = () => {
    setLoading(true);
    getUsersAndPubs()
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  }

  const handleDelete = (pubId) => {
    removePublication(pubId)
      .then(res => {
        if (res.data.ok) {
          toast.success(`${res.data.deleted.title} removed.`);
          loadUsers();
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year'
    }
  ];

  const showUsers = () => {
    const userCards = users.map((u, idx) => (
      <Card
        key={idx}
      >
        <Meta
          title={`${u.first_name} ${u.last_name}`}
          description={`Email: ${u.email}`}
        />
        {showPublications(u.publications)}
      </Card>
    ));

    return userCards;
  }

  const showPublications = (publications) => {
    const pubDivs = publications.map((p, idx) => (
      <div
        key={idx}
        className='d-flex my-4 justify-content-between'
      >
        <div>
          <b>Title: </b>
          {p.title}
        </div>
        <div>
          <b>Year: </b>
          {p.year}
        </div>
        <div>
          <Link
            to={`/pub/update/${p._id}`}
          >
            <EditOutlined />
          </Link>
        </div>
        <div
          onClick={() => handleDelete(p._id)}
        >
          <DeleteOutlined />
        </div>
      </div>
    ));
    return pubDivs;
  }

  return (
    <div className="container-fluid">
      <h1 
        className='text-center'
      >
        Publications by Author
      </h1>
      
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="d-flex justify-content-between">
            <Link
              to='/user/create'
            >
              <Button
                shape='round'
                icon={<PlusOutlined />}
                style={{
                  marginBottom: '2em',
                }}
              >
                Create User
              </Button>
            </Link>
            <Link
              to='/pub/create'
            >
              <Button
                type='primary'
                shape='round'
                icon={<PlusOutlined />}
                style={{
                  marginBottom: '2em',
                }}
              >
                Create Publication
              </Button>
            </Link>
          </div>
          {showUsers()}
        </div>
      </div>
    </div>
  );
}

export default Home;