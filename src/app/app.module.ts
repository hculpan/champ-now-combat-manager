import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CombatantListComponent } from './combatant-list/combatant-list.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhaseDisplayComponent } from './phase-display/phase-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CombatantListComponent,
    HeaderComponent,
    PhaseDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
