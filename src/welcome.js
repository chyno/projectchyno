
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
         this.kataService.getKatasCallBack(this.setKatas);
        //this.katas = this.kataService.getKatas();
        //
    }

    setKatas(kts) {
        this.katas = kts;
        this.kataChosen = this.katas[0];
    }

    attached() {

        this.codeservice.setControls([this.codeArea, this.testsArea] );

        if (this.kataChosen)
        {
            this.codeservice.setCodeValue(this.kataChosen.code);
            this.codeservice.setTestValue('Assert(true == true);');
        }

        var subscription = this.observerlocator
            .getObserver(this, 'kataChosen')
            .subscribe(this.onChange.bind(this));
    }

    onChange(newValue, oldValue) {
        if (newValue) {
            this.codeservice.setCodeValue(newValue.code);
          this.codeservice.setTestValue('Assert(true == true);');
        }
    }

}