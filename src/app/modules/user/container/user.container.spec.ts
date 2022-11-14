import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContainer } from './user.container';
import { NgxsModule } from "@ngxs/store";
import { UserState } from "@app/modules/user/store/user.state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('UserContainer', () => {
  let component: UserContainer;
  let fixture: ComponentFixture<UserContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([UserState]),
        HttpClientTestingModule
      ],
      declarations: [ UserContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
