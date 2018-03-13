
export default {
  /**
   * Get object from localStorage
   *
   * @param {string} key
   * @return {any}
   */
  get (key) {
    let ret = window.localStorage.getItem(key)
    if (ret) {
      return JSON.parse(ret)
    }
    return null
  },

  /**
   * Set object for localStorage
   *
   * @param {string} key
   * @param {any} value
   * @return {boolean}
   */
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  },

  /**
   * Remove object from localStorage
   *
   * @param {string} key
   * @return {boolean}
   */
  remove (key) {
    window.localStorage.removeItem(key)
    return true
  }
}
