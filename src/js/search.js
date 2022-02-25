/**
 * Example insertion text to use for search results:
 * var a = document.createElement('a');
 * var linkText = document.createTextNode("my title text");
 * a.appendChild(linkText);
 * a.title = "my title text";
 * a.href = "http://example.com";
 * document.body.appendChild(a);
 *
*/

/**
 * Following tutorial at:
 * https://gomakethings.com/how-to-create-a-search-page-for-a-static-website-with-vanilla-js/
 * With the idea to replace the duckduckgo search with an internal search of a compliled json file of website contents.
 * Search results will then be inserted into the page using the json data.
 * How this will look / will it redirect to a new page to run this search is still in question.
 * (Form submit for search could redirect to URL based param and search run off that param)
*/

/**
 * The searchIndex is likely going to become **huge** and will be better made as a json file imported into this js file
 * @param title: Page title i.e. "Checkboxes"
 * @param url: relative URl to page. i.e. "/forms/checkbox/"
 * @param content: full text of the content inside page. Will likely need a script to run that completes this otherwise will fall out of date quickly
 * @param summary: Clipper version of top intro of each page. i.e. "Checkboxes can be used on their own as a single form field."
 */
const searchIndex = [{},{},{}]
const stopWords = ['a', 'an', 'and', 'are', 'aren\'t', 'as', 'by', 'can', 'cannot', 'can\'t', 'could', 'couldn\'t', 'how', 'is', 'isn\'t', 'it', 'its', 'it\'s', 'that', 'the', 'their', 'there', 'they', 'they\'re', 'them', 'to', 'too', 'us', 'very', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whenever', 'where', 'with', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

(function () {

	// Get the DOM elements
	let form = document.querySelector('#form-search');
	let input = document.querySelector('#input-search');
	let resultList = document.querySelector('#search-results');
	let searchStatus = document.querySelector('#search-status');

	// Make sure required content exists
	if (!form || !input || !resultList || !searchStatus || !searchIndex) return;

  // Create a submit handler
  form.addEventListener('submit', submitHandler);

  /**
   * Handle submit events
  */
  function submitHandler (event) {
    event.preventDefault();
    search(input.value);
  }

  /**
   * Search for matches
   * @param  {String} query The term to search for
   */
  function search (query) {

    // Create a regex for each query
    let regMap = query.toLowerCase().split(' ').filter(function (word) {
      return word.length && !stopWords.includes(word);
    }).map(function (word) {
      return new RegExp(word, 'i');
    });

    // Get and sort the results
    let results = searchIndex.reduce(function (results, article, index) {
      // Setup priority count
      let priority = 0;

      // Assign priority
      for (let reg of regMap) {
        if (reg.test(article.title)) { priority += 100; }
        let occurences = article.content.match(reg);
        if (occurences) { priority += occurences.length; }
      }

      // If any matches, push to results
      if (priority > 0) {
        results.push({
          priority: priority,
          article: article
        });
      }

		return results;
    }, []).sort(function (article1, article2) {
      return article2.priority - article1.priority;
    });

    // Display the results
    showResults(results);

  }

  /**
   * Show the search results in the UI
   * @param  {Array}  results The results to display
   */
  function showResults (results) {
    if (results.length) {
      searchStatus.innerHTML = `<p>Found ${results.length} matching articles</p>`;
      resultList.innerHTML = myTemplate(results);
    } else {
      searchStatus.innerHTML = '<p>Sorry, no matches were found.</p>';
      resultList.innerHTML = '';
    }
  }
})();