import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/edit/matchbrackets.js';


import CodeMirror from 'codemirror/lib/codemirror.js';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';



export class CodeService {


    constructor() {

    }


    setControl(cntl) {

        console.log('controls: ' + cntl);
        //var cm = new CodeMirror();

        var editor = CodeMirror.fromTextArea(cntl, {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: 'blackboard'
        });
    }
}