import React from 'react'
// import OrderContent from "../orderSection/OrderContent";
// import { drugData } from "../drugData";
import { drugData } from './drugData'
import Sprite from './sprite.svg'
import { Table } from 'reactstrap'
import './DrugTable.css'
import action from '../image/action.png'
const DrugTable = () => {
  return (
    <div>
      {/* <OrderContent
        finalData={drugData}
        pageHeader="Products"
        listHeader="Product List"
      /> */}

      <div className="mt-3">
        <Table hover responsive className="table" size="">
          <thead className="">
            <tr>
              <th>S/N</th>
              <th> Drug Name</th>
              <th> Drug Generic Name</th>
              <th>Creation date</th>
              <th>Expiry date</th>
              <th>NAFDAC</th>
              <th>Dosages</th>
              <th>
                <div className="last-column">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {drugData.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.drugName}</td>
                <td>{item.genericName}</td>
                <td>{item.date}</td>
                <td>{item.expiryDate}</td>
                <td>{item.NAFDAC}</td>
                <td>{item.dosages}</td>
                <td>
                  <img src={action} className='action_img' alt='action'/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
export default DrugTable
