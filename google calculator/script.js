
let display=document.getElementById("display")
function set(x) {
    console.log("click chala")
    display.value += x;

}
function clr() {

    var elem = display.value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);
    display.value = a;
}
function calc(){
    var temp=display.value;
    if(temp.charAt(0)=='√')
    {
        console.log(temp.substring(1));
        root(temp.substring(1));
        return;
    }
    var a=eval(temp);
    console.log(a);
    var result=a.toString();
    display.value=result ;
}
function root(elem){
    var a=Math.sqrt(elem);
    var result=a.toString();
    display.value=result ;

}
