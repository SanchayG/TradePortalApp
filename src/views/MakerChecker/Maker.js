import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow 
} from '@coreui/react';


const Collapses = () => {

  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }

  return (
    <CRow>
     
      <CCol xl="12">
        <CCard>
         
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">General Details</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>

                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Branch ID</CLabel>
                            <CInput id="company" placeholder="Enter your Branch ID" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Product</CLabel>
                            <CInput id="company" placeholder="Enter your Product Name" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Sub Product</CLabel>
                            <CInput id="company" placeholder="Enter your Sub Product Name" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Operation</CLabel>
                            <CInput id="company" placeholder="Enter your Operation name" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Cust ID</CLabel>
                            <CInput id="company" placeholder="Enter your Cust ID" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Customer Name</CLabel>
                            <CInput id="company" placeholder="Enter your Customer Name" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">IE Code</CLabel>
                            <CInput id="company" placeholder="Enter your IE Code" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">PAN Code</CLabel>
                            <CInput id="company" placeholder="Enter your PAN Code" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Account No</CLabel>
                            <CInput id="company" placeholder="Enter your Account No" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">GST No</CLabel>
                            <CInput id="company" placeholder="Enter your GST No" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Currency </CLabel>
                            <CInput id="company" placeholder="Enter your Currency" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Amount</CLabel>
                            <CInput id="company" placeholder="Enter your Amount" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
            </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Reference Details</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Bill Ref No.</CLabel>
                            <CInput id="company" placeholder="Enter your Bill Ref No." />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Bill Status</CLabel>
                            <CInput id="company" placeholder="Enter your Bill Status" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Customer Portal Ref No.</CLabel>
                            <CInput id="company" placeholder="Enter your Customer Portal Ref No." />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Limit ID</CLabel>
                            <CInput id="company" placeholder="Enter your Limit ID" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Charges</CLabel>
                            <CInput id="company" placeholder="Enter your Charges" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Margin %</CLabel>
                            <CInput id="company" placeholder="Enter your Margin %" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Other Bank Ref No</CLabel>
                            <CInput id="company" placeholder="Enter your Other Bank Ref No" />
                        </CFormGroup>
                    </CCol>
                    
                </CFormGroup>
                
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Beneficiary Details</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                  <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Beneficiary Name</CLabel>
                            <CInput id="company" placeholder="Enter your Beneficiary Name" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Beneficiary Address</CLabel>
                            <CInput id="company" placeholder="Enter your Beneficiary Address" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="select">Beneficiary Country</CLabel>
                              <CSelect id="select" >
                                  <option value="0" >Please select Country Name</option>
                                 <option value="1">Option #1</option>
                             <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>
                            
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Place of Expiry</CLabel>
                            <CInput id="company" placeholder="Enter Place of Expiry" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Date of Expiry</CLabel>
                            <CInput id="company" placeholder="Enter Date of Expiry" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Description of Goods</CLabel>
                            <CInput id="company" placeholder="Enter Description of Goods" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Advising Bank Name & Address</CLabel>
                            <CInput id="company" placeholder="Enter Advising Bank Name & Address" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Reimbursing Bank Name & Address</CLabel>
                            <CInput id="company" placeholder="Enter Reimbursing Bank Name & Address" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel htmlFor="company">Advise Through Bank Name & Address</CLabel>
                            <CInput id="company" placeholder="Enter Advise Through Bank Name & Address" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses