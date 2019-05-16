import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../_services/language.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { Language } from '../../../models/Language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languages: Language[];

  constructor(private languageService: LanguageService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe((_languages: Language[]) => {
      this.languages = _languages;
    }, error => {
      this.alertify.error(error);
    });
  }

  editLanguage(id: string) {
    this.router.navigate(['/editlanguage', id]);
  }

  deleteLanguage(id: string) {
    this.languageService.delete(id).subscribe(() => {
      this.getLanguages();
    }, error => {
      this.alertify.error(error);
    });
  }

}
