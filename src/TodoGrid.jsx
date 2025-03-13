import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]); // Register all Community features

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { useRef } from 'react';

const columnSettings = {
    flex: 1
};

export default function TodoGrid({ tasks }) {
    const gridRef = useRef();


    const colDefs = [
        { headerName: "Done?", field: "done" },
        { headerName: "Description", field: "description" },
        { headerName: "Deadline", field: "deadline" },
        { headerName: "Delete", cellRenderer: ({ data }) => <button onClick={() => remove(data.id)}>🗑️</button> }
    ];


    function remove() {
        const selected = gridRef.current.api.getSelectedNodes().map(row => row.data);
        console.log(selected);
    }

    return (
        // Data Grid will fill the size of the parent container
        <>
            <div style={{ height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={tasks}
                    columnDefs={colDefs}
                    rowSelection={{ mode: 'singleRow', checkboxes: true }}
                    defaultColDef={columnSettings}
                />
            </div>
        </>
    );
}