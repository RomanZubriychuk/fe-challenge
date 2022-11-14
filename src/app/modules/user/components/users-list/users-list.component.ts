import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { User } from "@shared/models/user.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Store } from "@ngxs/store";
import { UpdatePageParams } from "@app/modules/user/store/user.actions";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() set users(users: User[] | null) {
    if(!users) return;
    this.dataSource = new MatTableDataSource(users);
  }
  @Input() page: number | null = null;
  @Input() limit: number | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['email', 'name', 'gender'];
  dataSource: MatTableDataSource<User> | undefined;
  // not specified from API
  maxLength = 5000;

  constructor(private store: Store) {
  }

  ngAfterViewInit() {
    if (this.paginator && this.dataSource)
      this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    if (!this.dataSource) return
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource?.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onPageChange(event: PageEvent) {
    this.store.dispatch(new UpdatePageParams(event.pageSize, event.pageIndex + 1))
  }
}
