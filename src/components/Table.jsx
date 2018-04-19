import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    const { data, caption } = this.props;

    const renderTable = data.map((row, i) => (
      <div key={i} className="TableRow">
        {
          row.map((cell, j) => (
            <div key={j} className={i ? 'TableCell' : 'TableHeader'}>
              {cell}
            </div>
          ))
        }
      </div>
    ));

    return (
      <div className="Table">
        <div className="TableCaption">{caption}</div>
        <div className="TableWrapper">
          {renderTable}
        </div>
      </div>
    );
  }
}

export default Table;
