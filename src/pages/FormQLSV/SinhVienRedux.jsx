import React, { Component } from "react";
import { connect } from "react-redux";

class SinhVienRedux extends Component {
  renderSinhVien = () => {
    let { arrSinhVien } = this.props;
    return arrSinhVien.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button className="btn btn-danger mx-2" onClick={() => {
                const action = {
                    type: 'XOA_SINH_VIEN',
                    payload: {
                        idSinhVienClick: sv.id
                    }
                };
                this.props.dispatch(action);
            }}>
              Xóa
            </button>
            <button className="btn btn-primary mx-2" onClick={() => {
                const action = {
                    type: 'SUA_SINH_VIEN',
                    payload: {
                        sinhVienEdit: sv
                    }
                };
                this.props.dispatch(action);
            }}>
              Sửa
            </button>
          </td>
         
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead
            className="card-header bg-dark text-white"
            style={{ fontSize: 15, fontWeight: "semibold" }}
          >
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.formReducer.arrSinhVien,
});

export default connect(mapStateToProps)(SinhVienRedux);
