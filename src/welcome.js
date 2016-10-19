
import { inject } from "aurelia-framework";
import { KataService } from "./service/kata-service";
import { CodeService } from './service/code-service';

@inject(KataService, CodeService)
export class Welcome {

    constructor(kataService, codeservice) {
        this.kataService = kataService;
        this.katas = [];
        this.cs = codeservice;
        this.cntl = null;
        this.kataChosen = false;
        this.favoriteKata;

    }

    activate() {
        this.katas = this.kataService.getKatas();
        this.favoriteKata = this.katas[0];
    }

    attached() {
        this.cntl = this.codeArea;
        this.cs.setControl(this.cntl);
    }

    setCode() {

        this.kataChosen = true;
        let code = this.favoriteKata.code;
        this.cs.setValue(code);

    }

     done() {

       this.kataChosen = false;
    }

}