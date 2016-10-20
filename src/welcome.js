
import { inject } from "aurelia-framework";
import { KataService } from "./service/kata-service";
import { CodeService } from './service/code-service';
import { ObserverLocator } from 'aurelia-binding';  // or 'aurelia-framework'

@inject(KataService, CodeService, ObserverLocator)
export class Welcome {


    constructor(kataService, codeservice, observerlocator) {
        this.kataService = kataService;
        this.katas = [];
        this.codeservice = codeservice;
        this.cntl = null;
        this.kataChosen = null;
        this.observerlocator = observerlocator;
        this.bar = '';

    }

    activate() {
        this.katas = this.kataService.getKatas();
        this.kataChosen = this.katas[0];
    }

    attached() {
        this.cntl = this.codeArea;
        this.codeservice.setControl(this.cntl);

        if (this.kataChosen)
        {
             this.codeservice.setValue(this.kataChosen.code);
        }


        var subscription = this.observerlocator
            .getObserver(this, 'kataChosen')
            .subscribe(this.onChange.bind(this));
    }


    onChange(newValue, oldValue) {

        if (newValue) {
         this.codeservice.setValue(newValue.code);
        }
    }

}