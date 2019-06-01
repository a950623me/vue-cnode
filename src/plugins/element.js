/**
 * 对ElementUI的组件进行按需引用。不需要的就不引用，
 * 这样可以减小打包后的文件体积
 */
import Vue from 'vue'
import{
    Button,
    Card,
    Input,
    Table,
    TableColumn,
    Dialog,
    Form,
    FormItem,
    Message,
    MessageBox,
    TabPane,
    Tabs,
    Tag,
    Pagination,
    Icon
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Icon)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox