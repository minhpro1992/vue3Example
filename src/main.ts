import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './UI/BaseButton.vue'
import BaseCard from './UI/BaseCard.vue'
import BaseContainer from './UI/BaseContainer.vue'
import BaseDialog from './UI/BaseDialog.vue'
import BaseModal from './UI/BaseModal.vue'
import BaseSearch from './UI/BaseSearch.vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-container', BaseContainer)
app.component('base-dialog', BaseDialog)
app.component('base-modal', BaseModal)
app.component('base-search', BaseSearch)
