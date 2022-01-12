import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-cookie-consent',
    templateUrl: './cookie-consent.component.html',
    styleUrls: ['./cookie-consent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentComponent implements AfterViewInit, OnDestroy {
    @ViewChild('cookiebar')
    cookiebar!: ElementRef;

    constructor() {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.cookiebar.nativeElement.style.opacity = '1';
        }, 200);
    }

    public closeCookieConsentBar() {
        this.cookiebar.nativeElement.style.opacity = '0';
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}
