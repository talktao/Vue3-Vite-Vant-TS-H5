/** 
 *  @author TalkTao
 * @description  按需引入Vant
*/ 
import { Button, Tabbar, TabbarItem, Sticky, NavBar, Icon, Search, DropdownMenu, DropdownItem, Image, Lazyload, Tabs, Tab, Toast, Field, CellGroup, Form  } from 'vant'
const pluginsVant = [
  Button, 
  Tabbar,
  TabbarItem,
  Sticky,
  NavBar,
  Icon,
  Search,
  DropdownMenu,
  DropdownItem,
  Image,
  Lazyload,
  Tabs,
  Tab,
  Toast,
  Field,
  CellGroup,
  Form 
]
export const vantPlugins = {
  install: function(vm) {
    pluginsVant.forEach((item:any) => {
      vm.component(item.name, item);
    });
  }
};