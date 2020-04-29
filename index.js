// The user must be able to search for parks in one or more states.
// The user must be able to set the max number of results, with a default of 10.
// The search must trigger a call to NPS's API.

// The parks in the given state must be displayed on the page. Include at least:
// Full name
// Description
// Website URL
// The user must be able to make multiple searches and see only the results for the current search.


//return json and look at all keys
https://developer.nps.gov/api/v1/parks?parkCode=acad&

//loop through keys, decide which inputs to used for every param 
function handleSubmit() {
    $('#search-parks').on('click', '#search-button',
    event => {
        event.preventDefault();
        let query = $('#search-form').val();
        getJSON(query); 
    });
}

    
function displayResults(responseJson) {
    $('#js-search-results').append($(`<span>"${responseJson.message}"</span>`));
    }

    
function getJSON() {
fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=LKXW3MBi74tzBs2JbgKrQB7BNJYR0ENyBJ6tbThM') 
.then(response => response.json())
.then(responseJson => displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.')); }

function handleApp() {
handleSubmit();
} 

$(handleApp);