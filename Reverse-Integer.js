/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0, original = x;
    x = Math.abs(x);
     
     while(x>0) {
        let rem = x%10;
        rev = (10*rev) + rem;
        x=Math.floor(x/10);


     }
      if (rev > 2**31 || rev < -(2**31)) {
        return 0;
      }
    return original < 0 ? -rev : rev ;

};