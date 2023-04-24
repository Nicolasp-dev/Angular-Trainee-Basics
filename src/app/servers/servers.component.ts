import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  serverName = "";
  serverCreationStatus = "No server  was created";
  allowNewServer = false;
  serverCreated = false;
  servers = ['TestServer-01', 'TestServer-02'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    } ,2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server " + this.serverName + " was created";
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
