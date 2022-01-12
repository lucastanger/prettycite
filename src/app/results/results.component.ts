import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { from, of } from 'rxjs';
import { Result } from '../shared/interfaces/result.interface';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements AfterViewInit {
    results: Result[] = new Array();
    private intersectionObserver?: IntersectionObserver;
    private lastIntersectionObserver?: IntersectionObserver;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.results.push({
            resultTitle: 'Angular(2020)',
            resultDescription:
                'Grundlagen, fortgeschrittene Themen und Best Practices - inkl. RxJS, NgRx und PWA',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=z-8BEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Hoppe', authorSurname: 'Malcher' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        this.results.push({
            resultTitle: 'Angular(2021)',
            resultDescription:
                'Das Praxisbuch zu Grundlagen und Best Practices',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=Boc_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Steyer', authorSurname: '' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        this.results.push({
            resultTitle: 'Angular für Dummies (2019)',
            resultDescription: '',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=AUiHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Poniros', authorSurname: '' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        this.results.push({
            resultTitle: 'Angular(2020)',
            resultDescription:
                'Grundlagen, fortgeschrittene Themen und Best Practices - inkl. RxJS, NgRx und PWA',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=z-8BEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Hoppe', authorSurname: 'Malcher' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        this.results.push({
            resultTitle: 'Angular(2021)',
            resultDescription:
                'Das Praxisbuch zu Grundlagen und Best Practices',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=Boc_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Steyer', authorSurname: '' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        this.results.push({
            resultTitle: 'Angular für Dummies (2019)',
            resultDescription: '',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=AUiHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Poniros', authorSurname: '' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });

        from(this.results).subscribe(console.log);
    }

    ngAfterViewInit(): void {
        this.initIntersectionObserver();
    }

    private initIntersectionObserver = (): void => {
        const results = this.document.querySelectorAll('.result-card');

        this.intersectionObserver = new IntersectionObserver(
            (entries) => {
                for (const { target, isIntersecting } of entries) {
                    if (isIntersecting) {
                        target.classList.toggle('opacity-0');
                        target.classList.toggle('opacity-100');
                        this.intersectionObserver?.unobserve(target);
                    }
                }
            },
            {
                threshold: 0.5
            }
        );

        // this.lastIntersectionObserver = new IntersectionObserver((entries) => {
        //     const lastCard = entries[0];
        //     if (!lastCard.isIntersecting) return;
        //     this.loadNewCards();
        //     this.lastIntersectionObserver?.unobserve(lastCard.target);
        //     this.lastIntersectionObserver?.observe(results[results.length - 1]);
        // }, {});

        // this.lastIntersectionObserver?.observe(results[results.length - 1]);

        results.forEach((result) => {
            this.intersectionObserver?.observe(result);
        });
    };

    private loadNewCards() {
        this.results.push({
            resultTitle: 'Angular(2020)',
            resultDescription:
                'Grundlagen, fortgeschrittene Themen und Best Practices - inkl. RxJS, NgRx und PWA',
            resultThumbnail: {
                thumbnailUrl:
                    'https://books.google.com/books/content?id=z-8BEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnailAltText: 'AngularBookCover'
            },
            authors: [{ authorName: 'Hoppe', authorSurname: 'Malcher' }],
            citation: [{ citationType: 'BIBTEX', citationContent: '@BOOK' }]
        });
    }
}
