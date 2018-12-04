import { User } from '../../model/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * The DialogData wraps a {@link User}
 */
export interface DialogData {
  /**
   * The instance of the {@link User} that should be returned by the dialog
   */
  user: User;
}

/**
 * The NewUserDialogComponent provides a form to create new {@link User}s
 */
@Component({
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.scss']
})
export class NewUserDialogComponent {
  /**
   * @ignore
   */
  user: User = new User('Sarah', 'Mey');
  /**
   * @ignore
   */
  constructor(public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  /**
   * This method is called if cancel is clicked.
   * It closes the dialog without emitting a value
   */
  onCancelClick(): void {
    this.dialogRef.close();
  }
  /**
   * This method is called if you click on submit.
   * It closes the dialog while emitting a new {@link User}.
   *
   * Attention: This User isn't (yet) saved in the database.
   * For this call the [createUser]{@link UserService#createUser} method of the {@link UserService}
   */
  onSubmit() {
    this.dialogRef.close(this.user);
  }

}
