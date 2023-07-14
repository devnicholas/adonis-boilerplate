/* eslint-disable prettier/prettier */
export default () => ({
    isOpen: true,
  
    toggle() {
      this.isOpen = !this.isOpen
    },
  
    open() {
      this.isOpen = true
    },
  
    close() {
      this.isOpen = false
    },
  })