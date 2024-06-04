const cleanestCountries =[
    "denmark", "united kingdom", "finland", "malta", "sweden", "luxembourg", "slovenia",
    "austria", "switzerland", "iceland", "netherlands", "france", "germany", "estonia",
    "latvia", "croatia", "australia", "slovakia", "czech republic", "norway", "belgium",
    "cyprus", "italy", "ireland", "japan", "new zealand", "spain", "greece", "bahamas",
    "romania", "lithuania", "seychelles", "hungary", "north macedonia", "botswana",
    "barbados", "saint vincent and the grenadines", "sao tome and principe", "united arab emirates",
    "antigua and barbuda", "bulgaria", "dominica", "united states", "singapore", "namibia",
    "poland", "panama", "portugal", "canada", "belize", "gabon", "ukraine", "saint lucia",
    "kiribati", "belarus", "armenia", "israel", "grenada", "trinidad and tobago", "cuba",
    "djibouti", "albania", "south korea", "montenegro", "chile", "ecuador", "venezuela",
    "costa rica", "zimbabwe", "suriname", "brunei", "jamaica", "mexico", "taiwan",
    "central african republic", "eswatini", "equatorial guinea", "mauritius", "serbia",
    "tonga", "brazil", "jordan", "moldova", "comoros", "bhutan", "colombia", "kuwait",
    "dominican republic", "bahrain", "cape verde", "argentina", "kazakhstan", "paraguay",
    "el salvador", "tunisia", "malawi", "bolivia", "afghanistan", "algeria", "andorra", "angola", "armenia", "azerbaijan", "bahrain",
    "bangladesh", "belarus", "benin", "bhutan", "bolivia", "bosnia and herzegovina",
    "botswana", "brazil", "brunei", "bulgaria", "burkina faso", "burundi", "cambodia",
    "cameroon", "central african republic", "chad", "china", "colombia", "comoros",
    "congo", "democratic republic of the congo", "croatia", "cuba", "cyprus", "djibouti",
    "dominican republic", "east timor", "ecuador", "egypt", "el salvador", "equatorial guinea",
    "eritrea", "ethiopia", "fiji", "gabon", "gambia", "georgia", "ghana", "guinea",
    "guinea-bissau", "guyana", "haiti", "honduras", "india", "indonesia", "iran", "iraq",
    "ivory coast", "jamaica", "jordan", "kazakhstan", "kenya", "north korea", "south korea",
    "kosovo", "kuwait", "kyrgyzstan", "laos", "lebanon", "lesotho", "liberia", "libya",
    "madagascar", "malawi", "malaysia", "maldives", "mali", "marshall islands", "mauritania",
    "micronesia", "moldova", "mongolia", "morocco", "mozambique", "myanmar", "namibia",
    "nauru", "nepal", "nicaragua", "niger", "nigeria", "oman", "pakistan", "palau",
    "palestine", "papua new guinea", "peru", "philippines", "qatar", "republic of the congo",
    "rwanda", "saint kitts and nevis", "saint lucia", "saint vincent and the grenadines",
    "samoa", "san marino", "sao tome and principe", "saudi arabia", "senegal", "serbia",
    "sierra leone", "solomon islands", "somalia", "south africa", "south sudan", "sri lanka",
    "sudan", "suriname", "swaziland", "syria", "tajikistan", "tanzania", "thailand",
    "togo", "tonga", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "tuvalu",
    "uganda", "ukraine", "united arab emirates", "uruguay", "uzbekistan", "vanuatu",
    "vatican city", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"
    ]
const submitted = (e) => {
    e.preventDefault()
    let userInput = document.getElementById("country").value;
    userInput.toLowerCase()
    let isFound = false
    for (let i = 0; i < cleanestCountries.length; i++) {
        if (userInput === cleanestCountries[i]) {
            let result = "Your Country Found At Rank " + (i + 1)
            document.querySelector(".result").innerHTML = result
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        document.querySelector(".result").innerHTML = "Your City IS Not On this list"
    }
}