import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    private navigationIsActiveSubject$ = new BehaviorSubject<boolean>(false);
    public isActive$ = this.navigationIsActiveSubject$.asObservable();

    constructor() {}

    ngOnInit(): void {}

    /**
     *
     */
    toggleNavigation() {
        this.navigationIsActiveSubject$.next(
            !this.navigationIsActiveSubject$.value
        );
    }
}
