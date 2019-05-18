import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-quan-ly-san-pham',
  templateUrl: './quan-ly-san-pham.component.html',
  styleUrls: ['./quan-ly-san-pham.component.css']
})
export class QuanLySanPhamComponent implements OnInit {

mang: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  themSanPham( _maSP, _tenSP, _gia){
    let sanPham = {
      // key: Value,
      maSp: _maSP,
      tenSp: _tenSP,
      gia: _gia,
    }

    this.mang.push(sanPham);
  }
}
