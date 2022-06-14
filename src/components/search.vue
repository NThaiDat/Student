<template>
  <div>
    <p>TRA CỨU THÔNG TIN TUYỂN SINH</p>
    <div class="formSearch">
      <div class="row ">
        <div class="col-3">
          <label for="inputHoTen" class="col-form-label">Họ Và Tên:</label>
        </div>
        <div class="col-7">
          <input type="text" name="" id="inputHoTen" class="form-control" v-model="inputHoTen">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="inputMa" class="col-form-label">Mã Học Sinh:</label>
        </div>
        <div class="col-7">
          <input type="text" name="" id="inputMa" class="form-control" v-model="inputMaHocSinh">
        </div>
      </div>
    </div>
    <button class="btn-info btn" @click="searchStudent">Tìm Kiếm</button>
    <table class="table table-hover table-bordered">
      <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Trường thi</th>
        <th scope="col">Quận Huyện</th>
        <th scope="col">Mã Học Sinh</th>
        <th scope="col">Lớp</th>
        <th scope="col">Họ Tên</th>
        <th scope="col">Ngày Sinh</th>
        <th scope="col">Tháng Sinh</th>
        <th scope="col">Năm Sinh</th>
        <th scope="col">Giới Tính</th>
        <th scope="col">Nơi Sinh</th>
        <th scope="col">Dân Tộc</th>
        <th scope="col">Hộ Khẩu</th>
        <th scope="col">Điện Thoại</th>
        <th scope="col">Tổng Điểm Năm 1</th>
        <th scope="col">Tổng Điểm Năm 2</th>
        <th scope="col">Tổng Điểm Năm 3</th>
        <th scope="col">Tổng Điểm Năm 4</th>
        <th scope="col">Tổng Điểm Năm 5</th>
        <th scope="col">Tổng Điểm 5 Năm</th>
        <th scope="col">Điểm Ưu Tiên</th>
        <th scope="col">Tổng Điểm</th>
        <th scope="col">Ghi Chú</th>
      </tr>
      </thead>
      <tbody v-for="student in search" :key="student.maHocSinh">
      <tr>
        <th scope="row">{{ student.stt }}</th>
        <td>{{ student.truongTH }}</td>
        <td>{{ student.quanHuyen }}</td>
        <td>{{ student.maHocSinh }}</td>
        <td>{{ student.lop }}</td>
        <td>{{ student.hoTen }}</td>
        <td>{{ student.ngaySinh }}</td>
        <td>{{ student.thangSinh }}</td>
        <td>{{ student.namSinh }}</td>
        <td>{{ student.gioiTinh }}</td>
        <td>{{ student.noiSinh }}</td>
        <td>{{ student.danToc }}</td>
        <td>{{ student.hoKhau }}</td>
        <td>{{ student.dienThoai }}</td>
        <td>{{ student.tongDiemNam1 }}</td>
        <td>{{ student.tongDiemNam2 }}</td>
        <td>{{ student.tongDiemNam3 }}</td>
        <td>{{ student.tongDiemNam4 }}</td>
        <td>{{ student.tongDiemNam5 }}</td>
        <td>{{ student.tongDiem5Nam }}</td>
        <td>{{ student.diemUuTien }}</td>
        <td>{{ student.tongDiem }}</td>
        <td>{{ student.ghiChu }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "searchPage",
  components: {},
  data() {
    return {
      inputHoTen: '',
      inputMaHocSinh: '',
      listStudent: [],
      search: [],
    }
  },
  methods: {
    async getData() {
      const response = await axios.get('http://localhost:3000/api/getAll');
      this.listStudent = response.data;
      this.search = response.data;
    },
    searchStudent() {
      console.log(1)
      console.log(this.inputMaHocSinh)
      for (let i=0;i<this.listStudent.length;i++){
        console.log(this.listStudent[i].maHocSinh+" "+this.listStudent[i].hoTen)
      }
      if (this.inputHoTen.trim() === '' && this.inputMaHocSinh.trim() === '') {
        this.search=this.listStudent;
      } else if (this.inputMaHocSinh.trim() != '' && this.inputHoTen.trim() === '') {
        this.search=[];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].maHocSinh === this.inputMaHocSinh.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
      } else if (this.inputHoTen.trim() != '' && this.inputMaHocSinh.trim() === '') {
        this.search=[];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].hoTen === this.inputHoTen.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
      } else {
        this.search=[];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].maHocSinh === this.inputMaHocSinh.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
        if(this.search.length==0){
          for (let i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i].hoTen === this.inputHoTen.trim()) {
              this.search.push(this.listStudent[i]);
            }
          }
        }
      }
    },
  },
  created() {
    this.getData();
  },

}


</script>

<style scoped>
.row {
  margin: 2%
}

.formSearch {
  margin-left: 20%;
}

button {
  margin-bottom: 2%;
}

</style>