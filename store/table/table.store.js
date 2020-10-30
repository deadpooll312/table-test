import {TableAction} from "./table.action";
import {decorate, observable} from "mobx";

class TableStore extends TableAction {
  error = null;
}

TableStore = decorate(TableStore, {
  error: observable,
});

export default new TableStore();
