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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgBusyModule } from 'ng-busy';
import { AppFooterComponent } from './utils/components/footer/footer.component'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        AppFooterComponent,
    ],
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
        PopoverModule.forRoot(),
        NgBusyModule.forRoot({
            message: 'Loading...',
            minDuration: 300
        }),
        MatProgressSpinnerModule,
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
        PopoverModule,
        NgBusyModule,
        MatProgressSpinnerModule,
        AppFooterComponent
    ],
    providers: []
})
export class AppImportsModule { }