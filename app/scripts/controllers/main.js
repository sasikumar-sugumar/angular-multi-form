'use strict';

/**
 * @ngdoc function
 * @name angularMultiFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMultiFormApp
 */
angular.module('angularMultiFormApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
       'Karma'
    ];

     var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Introduction';
   
   vm.indicatorsPosition = 'top';

    vm.application = {
      awesome: true
    };
    vm.options = {
      formState: {
        awesomeIsForced: false
      }
    };

    vm.user = {};

    vm.fields = [
      {
        type :  'input',
        key : 'firstName',
        templateOptions:{
          label : 'First Name'
        }
      },
       {
        type :  'input',
        key : 'LastName',
        templateOptions:{
          label : 'Last Name'
        }
      },
       {
        type :  'input',
        key : 'taxid',
        templateOptions:{
          label : 'Tax ID'
        }
      }

    ]

  // note, these field types will need to be
  // pre-defined. See the pre-built and custom templates
  // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
  vm.userFields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }
    },
    {
      key: 'file',
      type: 'file',
      templateOptions: {
        label: 'File input',
        description: 'Example block-level help text here',
        url: 'https://example.com/upload'
      }
    },
    {
      key: 'checked',
      type: 'checkbox',
      templateOptions: {
        label: 'Check me out'
      }
    }
  ];

    
  

    vm.initialFieldsapplication = [{
    "template": "<div class=\"row\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"><h2 class=\"text-center\">Loan Application<h2></div></div><hr/>"
}, {
    "className": "col-xs-12",
    "type": "input",
    "key": "input-1492318657937",
    "templateOptions": {
        "type": "",
        "label": "First Name",
        "required": true,
        "placeholder": "First Name",
        "description": "",
        "options": []
    }
}, {
    "className": "col-xs-12",
    "type": "input",
    "key": "input-1492318675757",
    "templateOptions": {
        "type": "",
        "label": "Last Name",
        "required": true,
        "placeholder": "Last Name",
        "description": "",
        "options": []
    },
}];
 vm.fields = angular.copy(vm.initialFieldsapplication); 
    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.application), null, 2);
    }
  
  });
