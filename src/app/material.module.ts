import { NgModule } from '@angular/core';
import { MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule} from '@angular/material';

const MAT_IMPORTS = [MatButtonModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatCheckboxModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatListModule,
                    MatTabsModule,
                    MatCardModule,
                    MatSelectModule,
                    MatProgressSpinnerModule,
                    MatDialogModule
                    ];

@NgModule({
    imports: MAT_IMPORTS,
    exports: MAT_IMPORTS
})
export class MaterialModule {}