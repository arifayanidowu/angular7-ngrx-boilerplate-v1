import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import { AppState } from "../app.state";
import * as TutorialActions from "../actions/tutorial.actions";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addTutorial(name: HTMLInputElement, url: HTMLInputElement) {
    this.store.dispatch(
      new TutorialActions.AddTutorial({ name: name.value, url: url.value })
    );
    name.value = "";
    url.value = "";
  }
  ngOnInit() {}
}
