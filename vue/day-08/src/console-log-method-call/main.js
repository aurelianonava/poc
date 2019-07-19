new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  methods: {
    reverseString(string) {
      return string.split('').reverse().join('');
    },
    reverseMessage() {
    	console.log('computer d function is run');
    	return this.message.split('').reverse().split('');
    }
  }

});
