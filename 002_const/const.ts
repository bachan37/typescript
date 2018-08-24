const const1 = function(){
    /**
       Error: 'const' declarations must be initialized.
       const a;
    **/

    /*
      Error: Cannot assign to 'a' because it is a constant or a read-only property.

      const a = 1;
      a = 2;
    */

    /*
      Error: Cannot redeclare block-scoped variable 'a'.
      const a = 1;
      const a = 2;
    */

    const a = 1;
    console.log(a);
    console.log(a+1);
};

const1();
