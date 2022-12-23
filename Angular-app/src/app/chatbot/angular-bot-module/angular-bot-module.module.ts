import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';
import { ChatComponent } from '../chat/chat.component';


@NgModule({
  declarations: [ChatComponent],
  providers: [ChatService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AngularBotModuleModule { }
