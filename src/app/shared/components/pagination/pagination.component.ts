import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_PAGINATION_CONFIG } from './pagination.constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  /** The total number of records */
  @Input() collectionSize = 95;
  /** Current page */
  @Input() currentPage = 1;
  /** The number of buttons to show either side of the current page */
  @Input() maxSize = 2;
  /** Display the First/Last buttons */
  @Input() firstLastButtons = true;
  /** Display the Next/Previous buttons */
  @Input() nextPreviousButtons = true;

  defaultPaginationConfig = DEFAULT_PAGINATION_CONFIG;
  totalPages: any[] = [];

  ngOnInit(): void {
    this.totalPages = new Array(
      Math.ceil(this.collectionSize / this.defaultPaginationConfig.pageSize)
    );
    console.log('this.totalPages', this.totalPages);
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    console.log('this.currentPage', this.currentPage);
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
