var obj = {
  count : 10,
  doSomethingLater : function(){
      // The traditional function binds "this" to the "obj" context.
      setTimeout( function (){
          // Since the arrow function doesn't have its own binding and
          // setTimeout (as a function call) doesn't create a binding
          // itself, the "obj" context of the traditional function will
          // be used within.
          this.count++;
          console.log(this);
      }, 300);
  }
}

obj.doSomethingLater();