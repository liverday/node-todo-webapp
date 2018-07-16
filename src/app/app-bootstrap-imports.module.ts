import {
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule,
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    PopoverModule
} from 'ngx-bootstrap';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        SortableModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        PopoverModule.forRoot()
    ], 
    exports: [
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DatepickerModule,
        BsDatepickerModule,
        ModalModule,
        BsDropdownModule,
        PaginationModule,
        ProgressbarModule,
        RatingModule,
        SortableModule,
        TabsModule,
        TimepickerModule,
        TooltipModule,
        TypeaheadModule,
        PopoverModule
    ],
    providers: []
})
export class AppBootstrapImportsModule { }