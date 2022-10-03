import TableCell from './TableCell'

const TableRow = ({ flight }) => {
  
  const words = Object.values(flight).slice(1)

  console.log(words)
  return (
    <tr>
      <td>✈</td>
      {words?.map((word, _index) => <TableCell key={_index} word={word} />)}
    </tr>
  )
}

export default TableRow
