import axios from "../../api";

export class TableAction {
  fetchTableContent() {
    axios.get("", {params: {command: "returnTicker"}}).then(({data}) => {
      this.tableData = data;
      this.error = null;
    }, (err) => {
      this.error = err;
      console.log("Error: ", err);
    })
  }
}
