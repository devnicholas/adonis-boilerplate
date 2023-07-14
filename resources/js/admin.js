import '../css/admin.css'

import Alpine from 'alpinejs'
import sidebar from './components/admin/sidebar'
import theme from './components/admin/theme'
import dropdown from './components/admin/dropdown'
import alert from './components/admin/alert'

window.Alpine = Alpine

Alpine.data('data', () => ({
  sidebar: sidebar(),
  theme: theme(),
}))

Alpine.data('dropdown', dropdown)
Alpine.data('alert', alert)

Alpine.start()
