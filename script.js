const verbs = [
    {
        infinitive: "ser",
        conjugations: {
            present: {
                eu: "sou",
                tu: "és",
                ele: "é",
                nós: "somos",
                eles: "são"
            },
            past: {
                eu: "fui",
                tu: "foste",
                ele: "foi",
                nós: "fomos",
                eles: "foram"
            }
        }
    },
    {
        infinitive: "ir",
        conjugations: {
            present: {
                eu: "vou",
                tu: "vas",
                ele: "va",
                nós: "vamos",
                eles: "vão"
            },
            past: {
                eu: "fui",
                tu: "foste",
                ele: "foi",
                nós: "fomos",
                eles: "foram"
            }
        }
    },
    {
        infinitive: "estar",
        conjugations: {
            present: {
                eu: "estou",
                tu: "estás",
                ele: "está",
                nós: "estamos",
                eles: "estão"
            },
            past: {
                eu: "estive",
                tu: "estiveste",
                ele: "esteve",
                nós: "estivemos",
                eles: "estiveram"
            }
        }
    },
    {
        infinitive: "ter",
        conjugations: {
            present: {
                eu: "tenho",
                tu: "tens",
                ele: "tem",
                nós: "temos",
                eles: "têm"
            },
            past: {
                eu: "tive",
                tu: "tiveste",
                ele: "teve",
                nós: "tivemos",
                eles: "tiveram"
            }
        }
    },
    {
        infinitive: "fazer",
        conjugations: {
            present: {
                eu: "faço",
                tu: "fazes",
                ele: "faz",
                nós: "fazemos",
                eles: "fazem"
            },
            past: {
                eu: "fiz",
                tu: "fizeste",
                ele: "fez",
                nós: "fizemos",
                eles: "fizeram"
            }
        }
    },
    {
        infinitive: "poder",
        conjugations: {
            present: {
                eu: "posso",
                tu: "podes",
                ele: "pode",
                nós: "podemos",
                eles: "podem"
            },
            past: {
                eu: "pude",
                tu: "pudeste",
                ele: "pôde",
                nós: "pudemos",
                eles: "puderam"
            }
        }
    }
];

$(document).ready(function() {
    // Populate verb list
    verbs.forEach(verb => {
        $('#verb-list').append(`<li class="list-group-item">${verb.infinitive}</li>`);
    });

    // Practice area
    let currentVerbIndex = 0;
    let currentPronoun = "eu";
    let currentTense = "present";
    const pronouns = ["eu", "tu", "ele", "nós", "eles"];
    const tenses = ["present", "past"];

    function updatePracticeArea() {
        $('#verb-to-practice').text(`Conjugate the verb "${verbs[currentVerbIndex].infinitive}" for "${currentPronoun}" in the ${currentTense} tense`);
    }

    updatePracticeArea();

    $('#check-answer').click(function() {
        const userInput = $('#user-input').val().trim();
        if (userInput === verbs[currentVerbIndex].conjugations[currentTense][currentPronoun]) {
            $('#feedback').text('Correct!').css('color', 'green');
        } else {
            $('#feedback').text(`Incorrect. The correct conjugation is: ${verbs[currentVerbIndex].conjugations[currentTense][currentPronoun]}`).css('color', 'red');
        }
        currentPronoun = pronouns[(pronouns.indexOf(currentPronoun) + 1) % pronouns.length];
        if (currentPronoun === "eu") {
            currentTense = tenses[(tenses.indexOf(currentTense) + 1) % tenses.length];
            if (currentTense === "present") {
                currentVerbIndex = (currentVerbIndex + 1) % verbs.length;
            }
        }
        updatePracticeArea();
        $('#user-input').val('');
    });
});
