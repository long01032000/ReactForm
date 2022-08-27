const stateDefault = {
  arrSinhVien: [
    { id: '1', name: "long", sdt: "012345", email: "wefwfw@gmail.com" },
  ],

  sinhVien: {
    id: "",
    name: "",
    sdt: "",
    email: "",
  },
  errors: {
    id: "",
    name: "",
    sdt: "",
    email: "",
  },
};

export const formReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value, datatype } = action.payload;

      state.sinhVien[id] = value;

      if (id === "id") {
        if (!value) {
          state.errors[id] = "Không được bỏ trống";
        } else {
          if (datatype === "number") {
            let regexNumber = /^\d+$/;
            if (!regexNumber.test(value)) {
              state.errors[id] = "Mã sinh viên phải là số";
            } else {
              state.errors[id] = "";
            }
          }
          // state.errors[id] = ''
        }
      } else if (id === "name") {
        if (!value) {
          state.errors[id] = "Không được bỏ trống";
        } else {
          if (datatype === "text") {
            let regexFullname =
              /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
            if (!regexFullname.test(value)) {
              state.errors[id] = "Họ và tên phải là chữ";
            } else {
              state.errors[id] = "";
            }
          }
        }
      } else if (id === "sdt") {
        if (!value) {
          state.errors[id] = "Không được bỏ trống";
        } else {
          let regexPhoneNumber = /^[0-9\-\+]{9,15}$/;
          if (!regexPhoneNumber.test(value)) {
            state.errors[id] = "Số điện thoại phải là số và bao gồm từ 9-15 số";
          } else {
            state.errors[id] = "";
          }
        }
      } else if (id === "email") {
        if (!value) {
          state.errors[id] = "Không được bỏ trống";
        } else {
          let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (!regexEmail.test(value)) {
            state.errors[id] = "Đề nghị nhập đúng định dạng email";
          } else {
            state.errors[id] = "";
          }
        }
      }
      state.sinhVien = { ...state.sinhVien };
      return { ...state }; //immutable
    }
    case "HANDLE_SUBMIT": {
      //Bước 1 : lấy dữ liệu từ action ra
      let { sinhVien, errors } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      console.log(arrSinhVienUpdate,sinhVien.id)
      let sinhVienCurrent = arrSinhVienUpdate.find(
        (sv) => sv.id === sinhVien.id
      );
      let valid = true;
      for (let key in errors) {
        if (errors[key] !== "") {
          valid = false;
          break;
        }
      }
      for (let key in sinhVien) {
        if (sinhVien[key] === "") {
          errors[key] = key + " không được bỏ trống !";
          valid = false;
          let arrErrorsUpdate = { ...state.errors };
          arrErrorsUpdate[key] = errors[key];
          state.errors = arrErrorsUpdate;
        }
      }
      if (!valid) {
        alert("Dữ liệu không hợp lệ");
      } else {
        if (!sinhVienCurrent) {
          arrSinhVienUpdate.push(sinhVien);
        } else {
          alert("Trùng mã sinh viên");
        }
      }

      state.arrSinhVien = arrSinhVienUpdate;

      return { ...state };
      //Bước 3: cập nhật lại state
    }
    case "XOA_SINH_VIEN": {
      //Lấy dữ từ action ra
      let { idSinhVienClick } = action.payload;
      //Xử lý clone arr hoặc object ra 1 biến
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sinhVien) => sinhVien.id !== idSinhVienClick
      );
      //Cập nhật lại state
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }

    case "SUA_SINH_VIEN":{
        let {sinhVienEdit}=action.payload;
        let sinhVienUpdate = {...state.sinhVien};
        sinhVienUpdate = sinhVienEdit;
        state.sinhVien = sinhVienUpdate;
        return {...state};
    }

    case "CAP_NHAT_SINH_VIEN": {
        let {capNhatSinhVien} = action.payload;
        let arrSinhVienUpdate = [...state.arrSinhVien];
        let sinhVienCurrent = arrSinhVienUpdate.find(sv => sv.id === capNhatSinhVien.id)
        if (sinhVienCurrent){
            for (let key in sinhVienCurrent ){
         
            sinhVienCurrent[key] = capNhatSinhVien[key];
          
               
            }
        }
        console.log(capNhatSinhVien,arrSinhVienUpdate)
        state.arrSinhVien = arrSinhVienUpdate;
     
        return {...state};
    }
    case "TIM_KIEM" : {
      let {searchStudent} = action.payload;
      let sinhVienUpdate = {...state.sinhVien};
      let data = sinhVienUpdate.filter((item) => {
        if (item.name.toLowerCase().include(searchStudent.toLowerCase())
        ) {
          console.log(item);
          return item;
        }
      });
      if (data.length === 0) {
        return "";
      }
      sinhVienUpdate = data;
      state.sinhVien = sinhVienUpdate;
      return {...state};
    }

    default:
      return state;
  }
};

// lib, angular framework
