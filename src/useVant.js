import { Button, Tabbar, TabbarItem, Form, Field, Icon, NavBar, Cell, CellGroup, Popup, List, PullRefresh, DatetimePicker, NumberKeyboard, Dialog, Progress, Rate, Divider } from 'vant';

// 注册vant组件
export default function (app) {
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(Form)
  app.use(Field)
  app.use(Button) // 注册组件
  app.use(Icon)
  app.use(NavBar)
  app.use(CellGroup)
  app.use(Cell)
  app.use(Popup)
  app.use(List)
  app.use(PullRefresh)
  app.use(DatetimePicker)
  app.use(NumberKeyboard)
  app.use(Dialog)
  app.use(Progress)
  app.use(Rate)
  app.use(Divider)
}
