import React, { Component } from 'react';
import data from "./data"
import ReactHtmlTableToExcel from "react-html-table-to-excel";

export default class Home extends Component {
    render() {
        return (
            <section className="py-4 container">
                    <div className="row justify-content-center">
                        <table className="table table-striped" id="data-table">
                            <thead>
                                <tr>
                                    <td>EmpId</td>
                                    <td>Name</td>
                                    <td>Age</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    <div className="col-12">
                        <ReactHtmlTableToExcel 
                            className="btn btn-info mx-auto d-block"
                            table="data-table"
                            filename="data Excel file"
                            sheet="Sheet"
                            buttonText="Export to Excel"
                        />
                    </div>
                    </div>
            </section>
        )
    }
}
