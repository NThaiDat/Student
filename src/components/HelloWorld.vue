<template>
  <div id="app">
    <p>TRA CỨU THÔNG TIN TUYỂN SINH</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <label for="upload" class="custom-upload">
      <input type="file" @change="onChange" placeholder="Click to import" id="upload"/>
      {{ label }}
    </label>

    <button @click="readFile">Import</button>
  </div>
</template>

<script>
// import { XlsxRead, XlsxJson } from "vue3-xlsx"
import readXlsxFile from "read-excel-file"
import axios from "axios";
import router from "@/router";

export default {
  name: 'HelloWorld',
  components: {
    // XlsxRead,
    // XlsxJson
  },
  props: {},
  data() {
    return {
      listStudent: [],
      label: "Click to upload",
    }
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      this.label = this.file.name;
    },
    readFile() {
      readXlsxFile(this.file).then((rows) => {
        this.tranferData(rows)
      })
    },
    tranferData(x) {
      for (let i = 0; i < x.length; i++) {
        if (Number.isInteger(x[i][0])) {
          this.listStudent.push(x[i])
          console.log(this.listStudent)
        }
      }
      this.postData()
      router.push("/search")
    },
    async postData() {
      try{
        await axios.delete('http://localhost:3000/api/delete');
      }
      catch(err){
        console.log(err)
      }
      for (let i = 0; i < this.listStudent.length; i++) {
        const student = {
          "stt": this.listStudent[i][0],
          "truongTH": this.listStudent[i][1],
          "quanHuyen": this.listStudent[i][2],
          "maHocSinh": this.listStudent[i][3].replace("\n", ""),
          "lop": this.listStudent[i][4],
          "hoTen":this.listStudent[i][5],
          "ngaySinh": this.listStudent[i][6],
          "thangSinh": this.listStudent[i][7],
          "namSinh": this.listStudent[i][8],
          "gioiTinh": this.listStudent[i][9],
          "noiSinh": this.listStudent[i][10],
          "danToc": this.listStudent[i][11],
          "hoKhau": this.listStudent[i][12],
          "dienThoai": this.listStudent[i][13],
          "tongDiemNam1": this.listStudent[i][14],
          "tongDiemNam2": this.listStudent[i][15],
          "tongDiemNam3": this.listStudent[i][16],
          "tongDiemNam4": this.listStudent[i][17],
          "tongDiemNam5": this.listStudent[i][18],
          "tongDiem5Nam": this.listStudent[i][19],
          "diemUuTien": this.listStudent[i][20],
          "tongDiem": this.listStudent[i][21],
          "ghiChu": this.listStudent[i][22],
        }
        try {
          const response = await axios.post("http://localhost:3000/api/post", student);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="file"] {
  display: none;
}

.custom-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  margin: 2%;
  width: 50%;
  border-radius: 10px;
}

button {
  border-radius: 10px;
  width: 10%;
  height: 40px;
  background-color: #c0e0f3;
}
</style>
