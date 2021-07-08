import Food from './Food'
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
export default class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    tipMsg:HTMLElement
    scoreMsg:HTMLElement
    //初始数速，递减速度
    initSpeed: number
    subSpeed: number
    //保存方向
    direction: string = ''
    //控制移动开关
    isMove: boolean = true

    constructor(initSpeed: number = 300, subSpeed: number = 30,inputScore:number=10,limitScore:number=10) {
        this.food = new Food
        this.scorePanel = new ScorePanel(inputScore,limitScore)
        this.snake = new Snake()
        this.tipMsg = document.getElementById('tipMsg')!;
        this.scoreMsg = document.getElementById('scoreMsg')!;
        //初始化数度，递减速度
        this.initSpeed = initSpeed
        this.subSpeed = subSpeed
        this.init()
    }

    //初始化游戏，调用事件监听
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.run()
        this.food.change()
    }

    //键盘点击时获取移动方向
    keydownHandler(event: KeyboardEvent) {
        //禁止相反方向点击
        switch (this.direction){
            case "ArrowUp":
            case "up":{
                if(event.key === 'ArrowDown'&& this.snake.body.length>1
                    ||event.key === "down" && this.snake.body.length>1){
                   return event.returnValue = false
                }
                break
            }
            case "ArrowDown":
            case "down":{
                if(event.key === 'ArrowUp'&& this.snake.body.length>1
                    ||event.key === "up" && this.snake.body.length>1){
                    return event.returnValue = false
                }
                break
            }
            case "ArrowLeft":
            case "left":{
                if(event.key === 'ArrowRight'&& this.snake.body.length>1
                    ||event.key === "right" && this.snake.body.length>1){
                    return event.returnValue = false
                }
                break
            }
            case "ArrowRight":
            case "right":{
                if(event.key === 'ArrowLeft'&& this.snake.body.length>1
                    ||event.key === "left" && this.snake.body.length>1){
                    return event.returnValue = false
                }
                break
            }
        }
        //传入方向
        if (event.key === 'ArrowUp' || event.key === 'up' || event.key === 'ArrowDown' || event.key === 'down'
            || event.key === 'ArrowLeft' || event.key === 'left' || event.key === 'ArrowRight' || event.key === 'right')
            this.direction = event.key
    }
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "up": {
                Y -= 10
                break
            }
            case "ArrowDown":
            case "down": {
                Y += 10
                break
            }
            case "ArrowLeft":
            case "Left": {
                X -= 10
                break
            }
            case "ArrowRight":
            case "Right": {
                X += 10
            }
        }
        this.snake.X = X
        this.snake.Y = Y
        if (this.isMove) {
            setTimeout(() => {
                this.run()
                this.eatFood()
               this.isMove = this.snake.eatBody()
            }, this.initSpeed - (this.scorePanel.i - 1) * this.subSpeed)
        }else{
            this.tipMsg.innerText = `游戏结束,您的分数为`
            this.scoreMsg.innerText = `${this.scorePanel.s}`
        }
    }

    //判断食物和蛇头是否重合,并且加分
    eatFood() {
        if (this.food.element.offsetLeft === this.snake.X && this.food.element.offsetTop === this.snake.Y) {
            this.food.change()
            this.scorePanel.AddScore()
            this.snake.addBody()
        }
    }
}