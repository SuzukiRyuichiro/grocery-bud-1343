import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "basket"];

  connect() {
    // console.log(this.inputTarget);
    // console.log(this.basketTarget);
  }

  // 1. listen to an event (submit)
  addItem(event) {
    event.preventDefault();
    // 2. get the input value (what the user typed)
    // 2.a set the input field as an target
    const item = this.inputTarget.value;
    // 3. create an <li>user input</li>
    const listItem = `<li class="list-group-item" data-controller="list-item">${item} <span data-action="click->list-item#deleteItem" style="cursor: pointer;">❌</span></li>`;
    // 4. insert that into the <ul>
    this.basketTarget.insertAdjacentHTML("beforeend", listItem);
    // 4.a set the <ul> as a target
    this.inputTarget.value = "";
  }
}
