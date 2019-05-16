import { Component, OnInit } from '@angular/core';
import { CurrencySymbol } from '../../../models/CurrencySymbol';
import { CurrencysymbolService } from '../../../_services/currencysymbol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcurrencysymbol',
  templateUrl: './createcurrencysymbol.component.html',
  styleUrls: ['./createcurrencysymbol.component.css']
})
export class CreatecurrencysymbolComponent implements OnInit {
  currencySymbol: CurrencySymbol;
  currencySymbolForm: FormGroup;
  addBtn: boolean;

  constructor(private currencySymbolService: CurrencysymbolService, private router: Router, private route: ActivatedRoute,
              private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.addBtn = true;
      const id = param.get('id');
      this.currencySymbolForm = this.fb.group({
        id: [''],
        symbol: ['', Validators.required]
      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.currencySymbolService.getCurrencySymbol(id).subscribe(data => {
          this.currencySymbolForm.setValue({
            id: data.id,
            symbol: data.symbol
          });
        });
      }
    });
  }

  onSubmit() {
    this.currencySymbol = Object.assign({}, this.currencySymbolForm.value);
    if (this.currencySymbol.id === '') {
      this.currencySymbol.id = '00000000-0000-0000-0000-000000000000';
      this.currencySymbolService.create(this.currencySymbol).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/currencysymbols']);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.currencySymbolService.update(this.currencySymbol).subscribe(() => {
        this.router.navigate(['/currencysymbols']);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
