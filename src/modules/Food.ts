import Snake from "./Snake";
export default class Food{
    element:HTMLElement
    snake:Snake
    constructor(){
        this.element = document.getElementById("food")!;
        this.snake = new Snake()
    }
    change(){
        let X = Math.round(Math.random()*29)*10
        let Y = Math.round(Math.random()*29)*10
        this.element.style.left = X+ 'px'
        this.element.style.top = Y + 'px'
    }
}
