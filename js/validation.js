function getEle(id) {
  return document.getElementById(id);
}
function Validation() {
    this.kiemTraRong = function (value, spanId, mess) {
      if (value === "") {
        //show error
        getEle(spanId).innerHTML = mess;
        return false;
      }
  
      getEle(spanId).innerHTML = "";
      return true;
    };
  
    this.kiemTraChucVu = function (spanId, mess) {
      if (document.getElementById("cVu").selectedIndex === 0) {
        //show error
        getEle(spanId).innerHTML = mess;
        return false;
      }
  
      getEle(spanId).innerHTML = "";
      return true;
    };
  
    this.kiemTraDoDaiKiTu = function (value, spanId, mess, min, max) {
      if (value.trim().length >= min && value.trim().length <= max) {
        //true
        getEle(spanId).innerHTML = "";
        return true;
      }
  
      //false
      getEle(spanId).innerHTML = mess;
      return false;
    };
  
    this.kiemTraChuoiKiTu = function (value, spanId, mess) {
      const letter =
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if (value.match(letter)) {
        //true
        getEle(spanId).innerHTML = "";
        return true;
      }
  
      //false
      getEle(spanId).innerHTML = mess;
      return false;
    };
  
    this.kiemTraEmail = function (value, spanId, mess) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      if (value.match(reg)) {
        //true
        getEle(spanId).innerHTML = "";
        return true;
      }
  
      // false
      getEle(spanId).innerHTML = mess;
      return false;
    };
  
    this.kiemTraTonTai = function (data, value, spanId, mess) {
      /**
       * 0. Tạo flag valid = false; //true: sv ton tai; false k sv ton tai
       * 1. Duyệt mảng data
       *      1.1. sv từ data[i]
       *      1.2. Nếu sv.maSV trùng vs value
       *      1.3. Đúng => Cập nhật gia trị cho valid là true
       *      1.4. break
       * 2. Kiểm tra valid
       */
      var valid = false;
      for (var i = 0; i < data.length; i++) {
        const person = data[i];
        if (person.id === value) {
          valid = true;
          break;
        }
      }
  
      if (valid) {
        getEle(spanId).innerHTML = mess;
        return false;
      }
  
      getEle(spanId).innerHTML = "";
      return true;
    };
  }
  