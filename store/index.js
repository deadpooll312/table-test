import TableStore from "./table/table.store";

class RootStore {
  constructor() {
    this.table = TableStore;
  }
}

export default new RootStore();
