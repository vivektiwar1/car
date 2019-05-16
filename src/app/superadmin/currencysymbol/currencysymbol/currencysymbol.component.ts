import { Component, OnInit } from '@angular/core';
import { CurrencySymbol } from '../../../models/CurrencySymbol';
import { CurrencysymbolService } from '../../../_services/currencysymbol.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-currencysymbol',
  templateUrl: './currencysymbol.component.html',
  styleUrls: ['./currencysymbol.component.css']
})
export class CurrencysymbolComponent implements OnInit {
  currencySymbols: CurrencySymbol[];
  constructor(private currencySymbolService: CurrencysymbolService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getCurrencySymbols();
  }

  getCurrencySymbols() {
    this.currencySymbolService.getCurrencySymbols().subscribe((_currencySymbols: CurrencySymbol[]) => {
      this.currencySymbols = _currencySymbols;
    }, error => {
      this.alertify.error(error);
    });
  }

  editCurrencySymbol(id: string) {
    this.router.navigate(['/editcurrencysymbol', id]);
  }

  deleteLanguage(id: string) {
    this.currencySymbolService.delete(id).subscribe(() => {
      this.getCurrencySymbols();
    }, error => {
      this.alertify.error(error);
    });
  }

}
