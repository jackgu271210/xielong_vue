
import axios from 'axios'

export default {
    // 获取新闻页数据
    async reqNewsData(context) {
        const { data: res } = await axios.get('/api/news')
        context.commit('shownewsdata', res.data)
    },
    // 获取产品页数据
    async reqProData(context) {
        const { data: res } = await axios.get('/api/product')
        context.commit('showprodata', res.data)
    }
}