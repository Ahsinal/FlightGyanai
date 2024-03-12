import Table from "react-bootstrap/Table";

const PackageSidetable = () => {
  return (
    <div className="basic-info-table my-12 ">
      <Table bordered hover responsive="sm">
        <tbody>
          <tr>
            <td>Country</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>Yen,Dollars</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>English,Dutch</td>
          </tr>
          <tr>
            <td>Time Zone</td>
            <td>UTC+2</td>
          </tr>
          <tr>
            <td>Best time to visit</td>
            <td>Jan,Feb,March,April</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PackageSidetable;
