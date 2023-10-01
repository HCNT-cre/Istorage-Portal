import { Container, Table, TableHead, TableRow, TableCell } from "@mui/material"

const TableDetail = ({
    headText,
    data
}) => {
    return (
        <Container maxWidth="md" sx={{
            mt: 20
        }}>
            <Table>
                <TableHead>
                    {headText}
                </TableHead>
                {
                    data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell variant="head">{item.title}</TableCell>
                                <TableCell>{item.value}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </Table>
        </Container>
    )
}

export default TableDetail
