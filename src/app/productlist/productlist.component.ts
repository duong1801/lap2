import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../entities/Iproduct';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  @Input() products: any[]; // Đảm bảo rằng đã khai báo và định nghĩa thuộc tính 'products'

  istProduct: IProduct[] = [];
  listProduct: any[];
  constructor() {}
  ngOnInit(): void {
    this.listProduct = this.products;
  }
  filterValue: string = ''; //ánh xạ tới textbox search
  filter() {
    //chọn sản phẩm có tên chưa tên giá trị nhập vào
    this.products = this.listProduct.filter((p) =>
      p.productName.includes(this.filterValue)
    );
  }
}
