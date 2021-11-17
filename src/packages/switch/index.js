// Switch 是对应组件的名字，要记得在 moor-switch.vue 文件中还是 name 属性哦
import HSwitch from './switch';

HSwitch.install = Vue => Vue.component(HSwitch.name, HSwitch);

export default HSwitch;
