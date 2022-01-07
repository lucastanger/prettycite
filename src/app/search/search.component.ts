import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
    SearchType,
    SearchTypeExampleUrl
} from '../shared/interfaces/search-type.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    private searchType$ = new BehaviorSubject<SearchType>(SearchType.URL);
    public searchTypeObserver$ = this.searchType$.asObservable();
    public searchTypeExampleUrl: string = SearchTypeExampleUrl.URL;

    constructor() {
        this.searchType$.subscribe((type) => {
            this.searchTypeExampleUrl = SearchTypeExampleUrl[type];
        });
    }

    ngOnInit(): void {}

    selectSearchMode(searchType: string) {
        switch (searchType) {
            case 'URL':
                this.searchType$.next(SearchType.URL);
                break;
            case 'ISBN':
                this.searchType$.next(SearchType.ISBN);
                break;
            case 'TITLE':
                this.searchType$.next(SearchType.TITLE);
                break;
            case 'DOI':
                this.searchType$.next(SearchType.DOI);
                break;
        }
    }
}
