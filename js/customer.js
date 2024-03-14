class Customer extends Person {
    constructor (hoTen, diaChi, id, email,tenCongTy,triGiaHoaDon,danhGia) {
        super(hoTen, diaChi, id, email);
        this.tenCongTy= tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon;
        this.danhGia = danhGia;
        
    }
}