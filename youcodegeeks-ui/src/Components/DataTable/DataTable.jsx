import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table.jsx";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

const DataTable = ({ data, columns }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                {table.getFooterGroups().map((footerGroup) => (
                    <TableRow key={footerGroup.id}>
                        {footerGroup.headers.map((footer) => (
                            <TableHead key={footer.id}>
                                {flexRender(footer.column.columnDef.footer, footer.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </Table>
        </>
    );
};

export default DataTable;