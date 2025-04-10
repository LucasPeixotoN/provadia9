import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/localstorage';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showBanner: boolean = true;
  bannerKey = 'showBanner';

  constructor(private service: StorageService) { }

  ngOnInit(): void {
    this.showBanner = this.service.getLocal(this.bannerKey) ? JSON.parse(this.service.getLocal(this.bannerKey)) : this.showBanner;
  }

  save(){
    this.service.setLocal(this.bannerKey, JSON.stringify(this.showBanner));
  }
}