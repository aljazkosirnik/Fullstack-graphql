import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '@core/services/utils/form.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  public form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly formService: FormService) {}

  public ngOnInit(): void {}

  public submit(): void {
    if (this.formService.validate(this.form)) {
    }
  }
}
