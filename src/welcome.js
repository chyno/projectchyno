
import {inject} from "aurelia-framework";
import {KataService} from "./service/kata-service";



@inject(KataService)
export class Welcome {


    constructor(kataService ) {

        this.kataService = kataService;
        this.katas = [{name : "foo"}];

    }

    activate() {

    }





}