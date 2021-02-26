
/* Study List */

let city = document.querySelector('.city');
let borough = document.querySelector('.borough');

city.addEventListener('change', () => {
    if (city.value == '서울') {
        var option1 = new Option("영등포", "city1", true)
        borough.options[1] = option1;
    }

    if (city.value == '경기') {
        borough.options[1] = null;
        var option1 = new Option("수원", "borough1", true)

        borough.options[1] = option1;
    }
});

