import React, { Component } from 'react'
import { connect } from 'react-redux'
import SinhVienRedux from './SinhVienRedux'
import ThongTinSinhVien from './ThongTinSinhVien'

class FormQLSV extends Component {
    render() {
        return(
            <div className="container">
                <ThongTinSinhVien/>
                <SinhVienRedux/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    formReducer: state.formReducer
})
export default connect(mapStateToProps)(FormQLSV)