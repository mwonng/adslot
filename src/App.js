import React from 'react';

function App() {
  return (
    <div className="container" id="app">
      <h3><strong>Adslot.</strong></h3>
      <h4>Bookings</h4>
      <hr />
      <h4>Adslot</h4>
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col" className="text-right">Quantity</th>
            <th scope="col" className="text-right">Rate</th>
            <th scope="col" className="text-right">Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row">1</th>
            <td>Mark</td>
            <td className="text-right">Otto</td>
            <td className="text-right">@mdo</td>
            <td className="text-right">@mdo</td>
          </tr>
          <tr className="high-light">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td className="text-right">Thornton</td>
            <td className="text-right">@fat</td>
            <td className="text-right">@mdo</td>
          </tr>
        </tbody>
      </table>

      <h4>Webfirm</h4>
      <table className="table table-sm table-bordered">
        <tbody>
          <tr className="no-active">
            <td colSpan="4">No active booking</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
