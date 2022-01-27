import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'

const Table = ({countries}) => {

    const column = [
        { dataField: 'name',
            text: 'Pays',
            sort: true
        }
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'asc'
    }];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 50,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    });

    const { SearchBar, ClearSearchButton } = Search;
    return (
        <>
            <ToolkitProvider bootstrap4 keyField='name' data={countries} columns={column} search>
                {
                    props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <ClearSearchButton {...props.searchProps} />
                            <hr />
                            <BootstrapTable defaultSorted={defaultSorted} pagination={pagination}{...props.baseProps}/>
                        </div>
                    )
                }
            </ToolkitProvider>
        </>
    );
}

export default Table;
