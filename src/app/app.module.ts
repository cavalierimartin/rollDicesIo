import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { DiceComponent } from './components/dice/dice.component';
import { FormsModule } from '@angular/forms';
import { DicesService } from './services/dices.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DicesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
