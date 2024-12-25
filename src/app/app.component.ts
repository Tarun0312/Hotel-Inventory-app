import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InitService } from 'src/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelInventoryApp';

  constructor(private initService: InitService, private router: Router) {
    console.log(initService.config);

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      console.log(event);
    }

    )
  }
}
