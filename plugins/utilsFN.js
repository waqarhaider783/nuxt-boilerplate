export default function (ctx, inject) {
  function formatDate(date) {
    // weekday: 'long', => wednesday (if needed)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleString('en-US', options)
  }

  function getRecent(data) {
    return data.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date)
    })
  }
  function titleize(slug) {
    const words = slug.split('-')
    return words
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      })
      .join(' ')
  }
  //  generates random id;
  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    //  return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  inject('utilsFN', { formatDate, getRecent, titleize, guid })
}
