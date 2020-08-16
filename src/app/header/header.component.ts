import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onSelect(activeTab: string) {
    this.tabSelected.emit(activeTab);
  }
}
