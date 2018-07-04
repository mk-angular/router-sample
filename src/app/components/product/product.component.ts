import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productID: string = '';
  isProd: string = '';

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
    this.isProd = route.snapshot.data[0].isProd;
  }

  ngOnInit() {
  }

}
