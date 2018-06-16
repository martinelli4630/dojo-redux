import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  displayedColumns = [
    '_id',
    'name',
    'surname',
    'gender',
    'birthDate',
    'email'
  ];
  dataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit() {
  }

}
