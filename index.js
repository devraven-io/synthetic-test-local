const {NodeVM, VMScript} = require('vm2');
const fs = require('fs');
const devraven = require('./devraven');
const env = require('./envVars');

(function() {
    const testScript = fs.readFileSync('./test.js', 'utf8');    

    const vm = new NodeVM({
        console: 'inherit',
        sandbox: {
            __dirname: "/",
            devraven
        },
        wasm: false,
        eval:false,
        require: {
            external: {
                modules: ['playwright', 'chai', 'moment', '@faker-js/faker', 'crypto-js', 'lodash', 'expect', 'axios']
            },
            root:'.'
        },
        env
    });

    var script = new VMScript(`module.exports = (async () => {
        try {
            ${testScript}
        } catch(e) {        
            return e;
        }
    });`).compile();
    
    var vmRun = vm.run(script, 'test.js');
    
    vmRun().then(e => {
        if(e) {
            console.log("Test failed", e);                    
            throw e;
        } else {
            console.log("Test passed");
        }
    });

})();

