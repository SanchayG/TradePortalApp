import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import usersData from '../users/inboxData'
const fields = ['Txn No','Product', 'Sub-Product', 'Operation', 'Cust ID', 'Account no', 'Currency', 'Amount', 'Beneficiary Name', 'Bill Ref No', 'Customer Portal Ref No', 'Entry Time']

const Dashboard = () => {
  return (
 
<CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Inbox
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              tableFilter
              sorter
              size="sm"
              itemsPerPage={7}
              pagination
              
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>



  )
}

export default Dashboard