class Student extends Person {
    constructor (hoTen, diaChi, id, email, ly, hoa, toan) {
        super(hoTen, diaChi, id, email);
        this.toan= toan;
        this.ly = ly;
        this.hoa = hoa;        
    }

    tinhDiemTB() {
        return (this.toan + this.ly + this.hoa)/3;
    }
}