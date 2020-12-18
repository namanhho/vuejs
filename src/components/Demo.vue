<template>
  <div id="">
    <img alt="Vue logo" src="@/assets/logo.png" width="25%" />
    <!-- <HelloWorld msg="Hello Vue Js in CodeSandbox!" /> -->
    <div v-if="state === 'loading'">Loading...</div>
    <div v-else-if="state === 'error'">Error</div>
    <div v-else>Default</div>
    <div v-show="false">v-show-false</div>
    <div>abc</div>

    <ul v-for="person in persons">
      <li>{{ person }}</li>
    </ul>

    <ul>
      <li v-for="(value, key) in citys">
        tên thành phố {{ key }}: {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="n in 3">{{ n }}</li>
    </ul>
    <button v-bind:type="btnType" v-bind:style="{ backgroundColor: m_Color }">
      Click me
    </button>
    <button v-bind:type="btnType" v-bind:style="myStyle">Click me</button>

    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>

    <p>{{ ok == true ? "Yes" : "No" }}</p>
    
    <p>{{ message.split(" ").reverse().join(" ") }}</p>
    <p>
      Binding 1 chiều, khi data thay đổi thì input thay đổi còn ngược lại thì
      không
    </p>
    <input type="text" v-bind:value="inputText" />
    <p>Text Input: {{ inputText }}</p>

    <p>Binding 2 chiều</p>
    <input type="text" v-model="inputText2chieu" />
    <p>Text Input: {{ inputText2chieu }}</p>

    <label><input type="radio" v-model="value" value="one" />One</label>
    <label><input type="radio" v-model="value" value="two" />Two</label>
    <label><input type="radio" v-model="value" value="three" />Three</label>
    <p>{{ value }}</p>

    <p>Test: {{ sta }}</p>

    <p>Curent status: {{ statusFromId(2) }}</p>

    <p>Số lớn hơn 0:</p>
    <ul>
      <li v-for="number in filterPositive(numbers)">{{ number }}</li>
    </ul>

    <p>Tổng các số lớn hơn 0:</p>
    <p>Dùng method thì mỗi lần gọi thì hàm sẽ thực thi lại và tính toán</p>
    <p>{{ sumNumberPositive() }}</p>
    <p>{{ sumNumberPositive() }}</p>

    <p>Tính tổng với Computed:</p>
    <p>
      Dùng Computed thì dữ liệu được cache lại, gọi lần 2 thì hàm ko cần tính
      toán lại, chỉ khi dữ liệu tham chiếu đến có thay đổi thì mới tính toán lại và cache lại giá trị tính toán mới đó
    </p>
    <p>{{ sumNumberWithComputed }}</p>

    <p>{{ sumNumberWithComputed }}</p>
  </div>
</template>

<script>

const status = {
  name: "AsLeep",
  age: "Eating",
  abc: "Learning Vue",
}["name"];

export default {
  // name: "App",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      state: "loading",
      persons: ["nam", "tuấn", "tú", "linh"],
      citys: {
        london: 123,
        paris: 321,
        china: 111,
      },
      m_Color: "red",
      btnType: "submit",
      myStyle: {
        backgroundColor: "blue",
        color: "yellow",
      },
      rawHtml: "<span style={color:red}>Thành phần HTML</span>",
      ok: true,
      message: "Xin Chào Hồ Nam Anh",
      inputText: "text input",
      inputText2chieu: "Binding 2 chiều",
      value: "one",
      sta: status,
      numbers: [1, -3, 3, -1, 4],
    };
  },
  methods: {
    statusFromId(id) {
      const status = {
        1: "Giá trị thuộc tính 1",
        2: "Giá trị thuộc tính 2",
        3: "Giá trị thuộc tính 3",
      }[id];
      return status || "Không tìm thấy" + id;
    },
    filterPositive(numbers) {
      return numbers.filter(function (number) {
        return number > 0;
      });
    },
    getNumberPositive() {
      return this.numbers.filter(function (number) {
        return number > 0;
      });
    },
    sumNumberPositive() {
      debugger;
      var sumMethod = this.getNumberPositive().reduce(function (
        number1,
        number2
      ) {
        return number1 + number2;
      });
      return sumMethod;
    },
  },
  computed: {
    sumNumberWithComputed() {
      var sumComputed = this.getNumberPositive().reduce(function (
        number1,
        number2
      ) {
        return number1 + number2;
      });
      debugger;
      return sumComputed;
    },
  },
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
