import React from "react";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'
import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/status-card/StatusCard";
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 50, 30, 60, 100, 40, 20],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 36, 80, 30, 40, 20, 29, 50],
    },
  ],

  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers ={

  head: [
    'user',
    'total orders',
    'total spending',
  ],
  body:[
    {
      "username": 'jhon Doe',
      "order": "490",
      "price": "$15,807"
    },
    {
      "username": 'Frank Doe',
      "order": "250",
      "price": "$12,257"
    },
    {
      "username": 'Anthony Baker',
      "order": "190",
      "price": "$12,807"
    },
    {
      "username": 'Arley Doe',
      "order": "80",
      "price": "$8,847"
    },
    {
      "username": 'Arley Doe',
      "order": "80",
      "price": "$8,847"
    },
  ]
}

const latestOrders = {
  header: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}


const renderCustomerHead = (item,index)=>(
  <ht key={index}>{item}</ht>
)

const renderCustomerBody = (item, index) =>(
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderOrderHead = (item,index)=>(
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index)=>(
  <tr>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status}/>
    </td>
  </tr>
)

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            ></Chart>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top customers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index)=>renderOrderHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index)=>renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Vie All</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table 
                headData={latestOrders.header}
                renderHead={(item, index)=>renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index)=>renderOrderBody(item, index)}/>
            </div>
            <div className="card__footer">
              <Link to=''>View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
