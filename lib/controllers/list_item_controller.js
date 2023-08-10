import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("added!");
  }

  // define an action for deleting a item
  // listen to the click event on to the <span>❌</span>
  // on action call remove the li from the list
  deleteItem() {
    this.element.remove();
  }
}
