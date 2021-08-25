import { CategoryService } from './services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  categories: Array<Category> = new Array<Category>();
  selectCategory: Category = new Category();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  // caterory?: olmasının nedeni boşta gelebilir demek
  onSelect(category?: Category) {
    if (category) {
      this.selectCategory = category;
    } else {
      this.selectCategory = new Category();
    }
  }
}
