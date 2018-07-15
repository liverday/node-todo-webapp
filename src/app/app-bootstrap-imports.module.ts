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
        TypeaheadModule.forRoot(),
        PopoverModule
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