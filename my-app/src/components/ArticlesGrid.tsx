import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { store } from '../store';
import { removeArticle } from '../store/actions';

export const ArticlesGrid: React.FC<any> = ({ rowData, handleSelection }) => {
    const gridRef: any = useRef<any>();

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        handleSelection(selectedRows[0].id);
    }, []);

  
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact rowData={rowData} rowSelection={'single'} onSelectionChanged={onSelectionChanged} ref={gridRef}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="title"></AgGridColumn>
                <AgGridColumn field="category"></AgGridColumn>
            </AgGridReact>
        </div>
    )
}