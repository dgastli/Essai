var ROWS = 10;

var FakeObjectDataListStore = require('./FakeObjectDataListStore');
var FixedDataTable = require('fixed-data-table');
var React = require('react');

var Column = FixedDataTable.Column;
var ColumnGroup = FixedDataTable.ColumnGroup;
var PropTypes = React.PropTypes;
var Table = FixedDataTable.Table;

var Main = React.createClass({
  propTypes: {
    onContentDimensionsChange: PropTypes.func,
    left: PropTypes.number,
    top: PropTypes.number,
  },

  getInitialState() {
    console.log("dorr");

    return {
      dataList: new FakeObjectDataListStore(ROWS)

    }
  },

  _rowGetter(index){
    return this.state.dataList.getObjectAt(index);
  },

  render() {
    var controlledScrolling =
      this.props.left !== undefined || this.props.top !== undefined;

    return (
      <Table
        rowHeight={30}
        groupHeaderHeight={30}
        headerHeight={30}
        rowGetter={this._rowGetter}
        rowsCount={this.state.dataList.getSize()}
        width={750}
        height={600}
        scrollTop={this.props.top}
        scrollLeft={this.props.left}
        overflowX={controlledScrolling ? "hidden" : "auto"}
        overflowY={controlledScrolling ? "hidden" : "auto"}>



          <Column
            fixed={true}
            label="First Name"
            dataKey="firstName"
            width={150}
          />
          <Column
            fixed={true}
            label="Last Name"
            dataKey="lastName"
            width={150}
          />
          <Column
            fixed={true}
            label="city"
            dataKey="city"
            width={150}
          />
          <Column
            fixed={true}
            label="avartar"
            dataKey="avartar"
            width={150}
          />
          <Column
            fixed={true}
            label="email"
            dataKey="email"
            width={150}
          />


      </Table>
    );
  }
});

React.render(<Main/>, document.getElementById("main"));
