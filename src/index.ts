//less样式导入
import "./assets/css/index.less"
//类导入
import GameControl from "./modules/GameControl";

//传入初始速度，递减速度，升级分段，最高等级
new GameControl(200,15,10,10)