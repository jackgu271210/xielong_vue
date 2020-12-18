import {
    getNewsData
} from '../api'

import {
    NEWS_DATA
} from './mutation-types'

export default {
    // 获取新闻页数据
    async reqNewsData({commit}) {
        const result = await getNewsData()
        commit('NEWS_DATA', {})
    }
}