import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  title = "my-app";
  activeTab: string = "recipes";

  selectedTab(activeTab: string) {
    this.activeTab = activeTab;
    console.log(activeTab);
  }
}
