export default class ScorePanel{
    s = 0
    i = 1
    score:HTMLElement
    level:HTMLElement

    inputLevel:number
    limitLevel:number
    constructor(inputLevel:number=10,limitLevel:number=10) {
        this.score = document.getElementById('score')!
        this.level = document.getElementById('level')!
        this.inputLevel = inputLevel //输入升级等级的限制
        this.limitLevel = limitLevel //限制升级的最高级
    }
    AddScore(){
        this.score.innerHTML = ++this.s +''
        if (this.s % this.inputLevel === 0){
            this.AddLevel()
        }
    }
    AddLevel(){
        if (this.i < this.limitLevel){
            this.level.innerHTML = ++this.i +''
        }
    }
}