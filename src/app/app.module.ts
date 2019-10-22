import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Directive } from "@angular/core";

import { AppComponent } from "./app.component";
import { Lighter } from "./Directives/app.lighter.directive";

@NgModule({
  declarations: [AppComponent, Lighter],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
