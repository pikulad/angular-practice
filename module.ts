export class add{
    constructor(private x: number,private y : number){

    }
    sum(){
        console.log("SUM: "+(this.x + this.y));
    }
}
export class sub{
    constructor(private x: number,private y : number){

    }
    sub1(){
        console.log("SUB: "+(this.x - this.y));
    }
}
export class div{
    constructor(private x: number,private y : number){

    }
    div1(){
        console.log("Div: "+(this.x / this.y));
    }
}
export class mul{
    constructor(private x: number,private y : number){

    }
    mul1(){
        console.log("MUL: "+(this.x * this.y));
    }
}
