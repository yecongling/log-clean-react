import './assets/main.css'

import ReactDOM from 'react-dom/client'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import { App as AntdApp, ConfigProvider } from 'antd'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  </BrowserRouter>

)
