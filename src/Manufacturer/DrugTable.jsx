import React from 'react'
// import OrderContent from "../orderSection/OrderContent";
// import { drugData } from "../drugData";
import { drugData } from './drugData'
import Sprite from "./sprite.svg";
import { Table } from 'reactstrap'
import './DrugTable.css'
const DrugTable = () => {
  return (
    <div>
      {/* <OrderContent
        finalData={drugData}
        pageHeader="Products"
        listHeader="Product List"
      /> */}

      <div className="table-responsive mt-3">
        <Table hover className="table">
          <thead className="table__head">
            <tr>
              <th>S/N</th>
              <th>creation date</th>
              <th>Company</th>
              <th> Drug Name</th>
              <th>Generic Drug</th>
              <th>
                <div className="last-column">
                  Action
                  {/* <th></th> */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {drugData.map((item) => (
              <tr>
                <td>{item.serial_number}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.drug_name}</td>
                <td>{item.generic_drug}</td>

                <td>
                  {/* <div className=" table__settings">
                    <button
                      type="button"
                      className="admin__list-item table__settings-button last-column"
                    >
                      <svg className="admin__icons admin__sidebar-icon">
                        <use href={Sprite + `#icon-settings`} />
                      </svg>
                      <svg className="admin__icons admin__sidebar-icon admin__sidebar-icon--toggle-up">
                        <use href={Sprite + `#icon-chevron-down`} />
                      </svg>
                    </button>
                    <div className="table__dropdown-menu">
                      <button className="edits table__dropdown-item last-column">
                        <svg className="admin__icons admin__sidebar-icon">
                          <use href={Sprite + `#icon-eye`} />
                        </svg>
                        View
                      </button>
                      <button className="edits table__dropdown-item action-button last-column">
                        <svg className="admin__icons admin__sidebar-icon">
                          <use href={Sprite + `#icon-edit-2`} />
                        </svg>
                        Edit
                      </button>
                      <button className="edits table__dropdown-item last-column">
                        <svg className="admin__icons admin__sidebar-icon">
                          <use href={Sprite + `#icon-clipboard`} />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div> */}
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
