

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
        width={800}
        height={800}
        scrollTop={this.props.top}
        scrollLeft={this.props.left}
        overflowX={controlledScrolling ? "hidden" : "auto"}
        overflowY={controlledScrolling ? "hidden" : "auto"}>
        <ColumnGroup
          fixed={true}
          label="Name">


          <Column
            fixed={true}
            label="Last Name"
            dataKey="lastName"
            width={150}
          />
        </ColumnGroup>
        
      </Table>
    );
  }
});

React.render(<Main/>, document.getElementById("main"));
