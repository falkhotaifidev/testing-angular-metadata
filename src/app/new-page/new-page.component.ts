import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss'
})
export class NewPageComponent implements OnInit {
  title = 'new page'

  constructor(private _title: Title, private _meta: Meta){}
  
  ngOnInit(): void {
    this._title.setTitle('new page')

    this._meta.addTag({ name: 'description', content: 'new page description' });
  }
}
