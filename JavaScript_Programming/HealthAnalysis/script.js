// DOM ELEMENTS

const addPatientButton = document.getElementById('addPatient');
const report = document.getElementById('report');
const btnSearch = document.getElementById('btnSearch');
const resultDiv = document.getElementById('result');

const patients = [];

// ADD PATIENT

function addPatient(){
    const name = document.getElementById("name").value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if(!name || !genderInput || !age || !condition){
        alert("Please fill all fields.");
        return;
    }

    const patient = {
        name, 
        gender: genderInput.value,
        age, 
        condition 
    };

    patients.push(patient);

    resetForm();
    generateReport();
}

// RESET FORM

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";

    const checkedGender = document.querySelector("input[name='gender']:checked");
    if(checkedGender) checkedGender.checked = false;
}

// GENERATE FORM

function generateReport(){
    const numPatients = patients.length;

    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    };

    const genderConditionsCount = {
        Male:{
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0
        }
    };

    for (const patient of patients){
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `<strong>Number of patients:</strong> ${numPatients}<br><br>`;

    report.innerHTML += `<strong>Condition Breakdown:</strong><br>`;
    for(const condition in conditionsCount){
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br><strong>Gender-Based Conditions:</strong><br>`;
    for(const gender in genderConditionsCount){
        report.innerHTML += `${gender}:<br>`;
        for(const condition in genderConditionsCount[gender]){
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}

// SEARCH CONDITION (JSON)

function searchCondition(){
    const input = document.getElementById('conditionInput').value.trim().toLowerCase();
    resultDiv.innerHTML = '';

    if(!input){
        resultDiv.textContent = "Please enter a condition to search."
        return;
    }

    fetch('health_analysis.json')
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to load data");
            }
            return response.json();
        })
        .then(data => {
            const condition = data.conditions.find(
                item => item.name.toLowerCase() === input
            );

            if(!condition){
                resultDiv.textContent = "Condition not found.";
                return;
            }

            const symptoms = condition.symptoms.join(', ');
            const prevention = condition.prevention.join(', ');
            const treatment = condition.treatment;

            resultDiv.innerHTML = `
                <h2>${condition.name}</h2>
                <img src="${condition.imagesrc}" alt="${condition.name}">
                <p><strong>Symptons: </strong>${symptoms}</p>
                <p><strong>Prevention: </strong>${prevention}</p>
                <p><strong>Treatment: </strong>${treatment}</p>
            `;
        })
        .catch(error => {
            console.error(error);
            resultDiv.textContent = 'Error loading condition data.';
        });
}

// EVENT LISTENERS

addPatientButton.addEventListener("click", addPatient);
btnSearch.addEventListener('click', searchCondition);