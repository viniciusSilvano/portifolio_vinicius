import { TECNOLOGIA_ENUM } from './../../tecnologias/data/TECNOLOGIAS_DADOS';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProjetoFilter } from '../../../../src/app/filters/projeto-filters/projeto-filters/class/projetoFilter';
import { Tecnologia } from '../../../../src/app/tecnologias/class/tecnologia';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-custom-card-tecnologia',
    templateUrl: './custom-card-tecnologia.component.html',
    styleUrls: ['./custom-card-tecnologia.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass]
})
export class CustomCardTecnologiaComponent {
  @Input() tecnologia? : Tecnologia;
  @Input() projetoFilter? : ProjetoFilter;
  @Output() tecnologiaClick = new EventEmitter<number>();
  @Input() clickable : Boolean = true;

  get imagePath(): string {
    let imagem_tecmap: Map<number | undefined,string> = new Map<number | undefined,string>();
    imagem_tecmap.set(TECNOLOGIA_ENUM.ANDROID,'android')
      .set(TECNOLOGIA_ENUM.SPRING_BOOT,'spring-boot')
      .set(TECNOLOGIA_ENUM.BOOTSTRAP,'bootstrap')
      .set(TECNOLOGIA_ENUM.JQUERY,'jquery')
      .set(TECNOLOGIA_ENUM.POSTGRES_SQL,'postgresql')
      .set(TECNOLOGIA_ENUM.TINYMCE,'tinymce')
      .set(TECNOLOGIA_ENUM.THYMELEAF, 'thymeleaf')
      .set(TECNOLOGIA_ENUM.JAVA,'java')
      .set(TECNOLOGIA_ENUM.ANGULAR,'angular')
      .set(TECNOLOGIA_ENUM.UNITY, 'unity')
      .set(TECNOLOGIA_ENUM.C_SHARP,'csharp')
      .set(TECNOLOGIA_ENUM.LOMBOK, 'lombok')
      .set(TECNOLOGIA_ENUM.JUNIT, 'junit')
      .set(TECNOLOGIA_ENUM.MOCKITO, 'mockito')
      .set(TECNOLOGIA_ENUM.APACHE_MAVEN, 'apache-maven')
      .set(TECNOLOGIA_ENUM.FLYWAYDB, 'flyway')
      .set(TECNOLOGIA_ENUM.DOCKER, 'docker-mark-white');
    /*const fileNames: Record<number, string> = {
      1: 'android', 2: 'spring-boot', 3: 'bootstrap', 4: 'jquery',
      5: 'postgresql', 6: 'tinymce', 7: 'thymeleaf', 8: 'java',
      9: 'angular', 10: 'unity', 11: 'csharp', 12: 'lombok',
      13: 'junit', 14: 'mockito', 15: 'apache-maven', 16: 'flyway'
    };*/
    if(imagem_tecmap.has(this.tecnologia?.id)){
      const fileName = this.tecnologia?.id ? imagem_tecmap.get(this.tecnologia.id) : undefined;
      const extension = [TECNOLOGIA_ENUM.TINYMCE, TECNOLOGIA_ENUM.MOCKITO].includes(this.tecnologia?.id ?? -1) ? 'png' : 'svg';
      return fileName ? `assets/images/tecnologias/${fileName}.${extension}` : '';
    }
    return '';
  }
  OnClickSearchByTecnologyImage(){
    if(this.tecnologia){
      this.tecnologiaClick.emit(this.tecnologia.id);
    }
  }

}
