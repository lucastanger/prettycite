import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ngVariable]'
})
export class NgVariableDirective {
    @Input()
    set ngVariable(context: any) {
        this.context.$implicit = this.context.ngVariable = context;
        this.updateView();
    }

    context: any = {};

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {}

    updateView() {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(
            this.templateRef,
            this.context
        );
    }
}
