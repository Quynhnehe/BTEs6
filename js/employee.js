class Employee extends Person {
    constructor (hoTen, diaChi, id, email, soNgayLam, luongTheoNgay) {
        super(hoTen, diaChi, id, email);
        this.soNgayLam= soNgayLam;
        this.luongTheoNgay = luongTheoNgay;
    }
    
    tinhLuong() {
        return this.soNgayLam * this.luongTheoNgay;
    } 
}