import React, { Component } from "react";
import { connect } from "react-redux";
import { useState } from "react";

class ThongTinSinhVien extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      payload: {
        sinhVien: { ...this.props.sinhVien },
        errors: { ...this.props.errors },
      },
    };

    this.props.dispatch(action);
  };
  render() {
    let { sinhVien, errors} = this.props;
    return (
      <div className="container">
        <form className="card" onSubmit={this.handleSubmit}>
          <div
            className="card-header bg-dark text-white"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Thông Tin Sinh Viên
          </div>
          <div className="card-body row">
            <div className="col-6">
              <div className="form-group">
                <p>Mã SV</p>
                <input
                  data-type="number"
                  className="form-control"
                  id="id"
                  value={sinhVien.id}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        datatype: e.target.getAttribute("data-type"),
                      },
                    };
                    // {type:'HANDLE_CHANGE_INPUT', id:'id', value:'123'}
                    this.props.dispatch(action);
                  }}
                />
                <p className="text-danger">{errors.id}</p>
              </div>
              <div className="form-group">
                <p>Số Điện Thoại</p>
                <input
                  className="form-control"
                  id="sdt"
                  value={sinhVien.sdt}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    // {type:'HANDLE_CHANGE_INPUT', id:'id', value:'123'}
                    this.props.dispatch(action);
                  }}
                />
                <p className="text-danger">{errors.sdt}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ Tên</p>
                <input
                  data-type="text"
                  className="form-control"
                  id="name"
                  value={sinhVien.name}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        datatype: e.target.getAttribute("data-type"),
                      },
                    };
                    // {type:'HANDLE_CHANGE_INPUT', id:'id', value:'123'}
                    this.props.dispatch(action);
                  }}
                />
                <p className="text-danger">{errors.name}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  className="form-control"
                  id="email"
                  value={sinhVien.email}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    // {type:'HANDLE_CHANGE_INPUT', id:'id', value:'123'}
                    this.props.dispatch(action);
                  }}
                />
                <p className="text-danger">{errors.email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success mx-2" type="submit">
              Thêm Sinh Viên
            </button>
            <button
              className="btn btn-success mx-2"
              type="button"
              onClick={() => {
                const action = {
                  type: "CAP_NHAT_SINH_VIEN",
                  payload: {
                    capNhatSinhVien: sinhVien,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              Cập Nhật Sinh Viên
            </button>
          </div>
        </form>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="datatable-search-input">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            id="datatable-search-input"
            onSubmit={(e) => {
              const action = {
                type: "TIM_KIEM",
                payload: {
                  searchStudent : e.target.value
                },
              };
              this.props.dispatch(action);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.formReducer.sinhVien,
  errors: state.formReducer.errors,
});

export default connect(mapStateToProps)(ThongTinSinhVien);
