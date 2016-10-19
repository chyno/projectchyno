
import { inject } from "aurelia-framework";
import { KataService } from "./service/kata-service";
import { CodeService } from './service/code-service';

@inject(KataService, CodeService)
export class Welcome {

    constructor(kataService, codeservice) {
        this.kataService = kataService;
        this.katas = [];
        this.cs = codeservice;


    }

    attached() {
        let cntl = this.codeArea;
        this.cs.setControl(cntl);
    }
}