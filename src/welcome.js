
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


    }

    attached() {
        this.cntl = this.codeArea;
        this.cs.setControl(this.cntl);
    }

    setCode() {

        let code = "function findSequence(goal) { \n foo; \n bar; ";
        this.cs.setValue(code);
    }

}