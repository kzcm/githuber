/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2018-01-17 18:03:38
 */

'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

import search from './modules/search';
import github from './modules/github';

Vue.use(Vuex);

export const actions = {};
export const getters = {};
export const mutations = {};
export default new Vuex.Store({
    state: {},
    actions,
    mutations,
    modules: {
        search,
        github,
    },
    strict: process.env.NODE_ENV !== 'production'
});