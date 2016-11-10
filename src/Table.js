import React, { Component } from 'react';

const TableBodyCell = ({ contents }) =>
  <td>{contents}</td>

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: null
    }
  }
  componentDidMount() {
    fetch('/data')
    .then(res => {
      this.setState({
        loading: false,
        data: res,
        error: null
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
        data: null,
        error: err
      })
    })
  }
  render() {
    const { loading, data, err } = this.state
    if (loading) {
      return <strong>loading...</strong>
    }

    if (err) {
      return <em>{err.message}</em>
    }

    return <div>{data.whatever}</div>
  }
}

class TableBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 1
    }
  }

  componentWillMount() {
    console.log('I WILL MOUNT!');

    fetch('/')
    .then((res) => this.setState({ res }))
  }

  renderRow(columns, datum) {
    return (
      <tr key={datum.id}>
        {columns.map(
          (column, index) =>
            <TableBodyCell
              contents={datum[column]}
              key={index} />
        )}
      </tr>
    )
  }

  render() {
    const { columns, data } = this.props
    return (
      <tbody>
        {data.map(
          (datum) => this.renderRow(columns, datum)
        )}
      </tbody>
    )
  }
}

class TableHeader extends Component {
  renderCell(column) {
    return <th key={column}>{column}</th>
  }

  render() {
    const { columns } = this.props

    return (
      <thead>
        <tr>
          {columns.map(this.renderCell)}
        </tr>
      </thead>
    )
  }
}

class Table extends Component {
  render() {
    const { columns, data } = this.props

    return (
      <table>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    )
  }
}

export default Table;
