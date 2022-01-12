import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { Result } from 'src/app/shared/interfaces/result.interface';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements OnInit {
    @ViewChild('citation') citation!: ElementRef;
    @Input() result!: Result;

    constructor() {}

    ngOnInit(): void {}

    openCitationBox() {
        this.citation.nativeElement.classList.toggle('h-96');
        this.citation.nativeElement.classList.toggle('h-0');
    }
}
