import { defineStore } from 'pinia'
import DbOperations from '@/helpers/DbOperations'

const collectionDB = new DbOperations('courses')

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    coursesList: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getCourses: (state) => state.coursesList,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async fetchCourses() {
      this.isLoading = true
      this.error = null
      try {
        const list = await collectionDB.loadItemsList()
        this.coursesList = list
      } catch (error) {
        console.error('Error of fetching courses:', error)
        this.error = error
      } finally {
        this.isLoading = false
      }
    },
  },
})
