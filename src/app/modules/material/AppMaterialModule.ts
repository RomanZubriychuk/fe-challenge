import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule],
  exports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule]
})
export class AppMaterialModule {

}
