/** 
 *  @author TalkTao
 * @description  按需引入Vant
*/ 
import { Button, Tabbar, TabbarItem, Sticky, NavBar, Icon, Search, DropdownMenu, DropdownItem, Image, Lazyload, Tabs, Tab, Toast, Field, Cell, CellGroup, Form, List  } from 'vant'
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
	Cell,
	CellGroup,
	Form,
	List 
]
export const vantPlugins = {
  	install: function(vm) {
    	pluginsVant.forEach((item:any) => {
      	vm.component(item.name, item);
    	});
  	}
};