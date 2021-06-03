import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-curso-view',
  templateUrl: './curso-view.component.html',
  styleUrls: ['./curso-view.component.css']
})
export class CursoViewComponent implements OnInit, OnDestroy {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoP: CursoProviderService,
    private auth: AuthService,
    private _sanitizer: DomSanitizer
  ) {
    
   }

   usuarioActual = this.auth.user;
  
  curso!: Curso;
  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => this.curso = curso );

    console.log('Entrando',this.usuarioActual)
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    console.log('destruyendo curso')
  }
}
