import {TableAction} from "./table.action";
import {decorate, observable} from "mobx";

class TableStore extends TableAction {
  error = null;
  tableData = null;
}

TableStore = decorate(TableStore, {
  error: observable,
  tableData: observable,
});

export default new TableStore();
