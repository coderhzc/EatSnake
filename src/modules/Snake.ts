export default class Snake{
    head:HTMLElement
    body:HTMLCollection
    element:HTMLElement
    constructor() {
        this.head = document.querySelector("#snake>div")!;
        this.element = document.getElementById("snake")!;
        this.body = this.element.getElementsByTagName('div');
    }
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(Value:number){
        this.moveBody()
        if (Value>=300){
            this.head.style.left = 0 + "px"
        }else if (Value<0){
            this.head.style.left = 290 + "px"
        }else{
            this.head.style.left = Value + "px"
        }
    }
    set Y(Value:number){
        if (Value>=300) {
            this.head.style.top = 0 + "px"
        }else if (Value<0){
            this.head.style.top = 290 + "px"
        }else{
            this.head.style.top = Value + "px"
        }
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    //获取每个身体移动的位置，并代替
    moveBody(){
        for (let i = this.body.length-1;i>0;i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left=X + 'px';
            (this.body[i] as HTMLElement).style.top=Y + 'px';

        }
    }
    //检测身体碰撞
    eatBody():boolean{
        let play = true
        for (let i = this.body.length - 1; i > 0; i--) {
            let X = (this.body[i] as HTMLElement).offsetLeft
            let Y = (this.body[i] as HTMLElement).offsetTop
            if (this.head.offsetLeft === X && this.head.offsetTop === Y){
                play = false

            }
        }
        return play
    }
}