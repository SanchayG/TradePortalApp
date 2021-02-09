import { CircularProgress, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import inboxData from '../users/inboxData'
import { Link } from 'react-router-dom';
export default class test2 extends Component {
    state = {
        page: 0,
        count: 1,
        data: [["Loading your Tasks..."]],
        isLoading: false
    };

    render() {
        

        const columns = [
        {
            name: "BDTxnNo",
            label: "Txn No",
            options: {
                filter: true,

            }
        },
        {
            name: "BDProduct",
            label: "Product",
            options: {
                filter: true,
            }
        },
        {
            name: "BDSubProduct",
            label: "Sub Product",
            options: {
                filter: false,
            }
        },
        {
            name: "BDOperation",
            label: "Operation",
            options: {
                filter: false,
            }
        },
        {
            name: "CustID",
            label: "Cust ID",
            options: {
                filter: true,
            }
        },
        {
            name: "BDAccountNo",
            label: "Account No",
            options: {
                filter: false,
            }
        },
        {
            name: "BDCurrency",
            label: "Currency",
            options: {
                filter: false,
            }
        },
        {
            name: "BDAmount",
            label: "Amount",
            options: {
                filter: false,
            }
        },
        {
            name: "BeneficiaryName",
            label: "Beneficiary Name",
            options: {
                filter: false,
            }
        },
        {
            name: "BillRefNo",
            label: "Bill Ref No",
            options: {
                filter: false,
            }
        },
        {
            name: "CustomerPortalRefNo",
            label: "Customer Portal Ref No",
            options: {
                filter: false,
            }
        },
        {
            name: "EntryTime",
            label: "Entry Time",
            options: {
                filter: false,
            }
        },
        {
            name: "Action",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const { data } = this.state;
                    let rowData = data[tableMeta.rowIndex];
                    
                    return (
                        <Link to='/MakerChecker/Maker' className="fa fa-play"></Link>
                    );
                }
            }
        },

        ];
        const { data, isLoading } = this.state;
        const options = {
            
            filterType: 'dropdown',
            responsive: 'stacked',
           
        };
        
        return (
            <div>
                <MUIDataTable title={<Typography variant="title">
                    {isLoading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
                </Typography>
                } data={inboxData} columns={columns} options={options} />
            </div>
        )
    }

           
}