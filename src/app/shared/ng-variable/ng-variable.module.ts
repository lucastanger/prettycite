import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgVariableDirective } from './ng-variable.directive';

@NgModule({
    declarations: [NgVariableDirective],
    imports: [CommonModule],
    exports: [NgVariableDirective]
})
export class NgVariableModule {}
