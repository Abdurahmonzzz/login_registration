$(document).ready(function () {
    $(document).on('click','#login',function () {
        $('body :not(script)').contents().filter(function() {
            return this.nodeType === 3;
          }).replaceWith(function() {
              x = this.nodeValue.replace('Already','Dont have an account?');
              b = this.nodeValue.replace('Join','Log in to');
              return x,b;
          });
    });
});