import { NgModule } from '@angular/core';
import { MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule} from '@angular/material';

const MAT_IMPORTS = [MatButtonModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatDatepickerModule,
                    MatNativeDateModule
                    ];

@NgModule({
    imports: MAT_IMPORTS,
    exports: MAT_IMPORTS
})
export class MaterialModule {}