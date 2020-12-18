import {
    NEWS_DATA
} from './mutation-types'

export default {
    [NEWS_DATA](state, {newsdata}) {
        state.newsdata = newsdata
    }
}