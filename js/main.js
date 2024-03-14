import ListPerson from './listPerson.js';
import Person from './person.js';

let dsql = new ListPerson();
// console.log(dsql)
let arrQL = [];
// 

document.getElementById("btnAdd").onclick = function () {
    arrQL = document.querySelectorAll("#formQL input, #formQL select, #formQL textarea")
    // console.log(arrQL);

    const perSon = new Person();
    // console.log(perSon);

    arrQL.forEach((field, index) => {
        let { id, value } = field;
        perSon[id] = value;
    });
    dsql.addPerson(perSon);
    renderPerson();
    saveDataLocal();
    // console.log(dsql.listPerson);
}

const renderPerson = (arrP = dsql.listPerson) => {    
    let content = "";
    arrP.forEach((person, index) => {
        let newPerson = new Person();
        newPerson = { ...newPerson, ...person };
        // console.log(newPerson); 
        const { idql, txtTen, txtEmail, txtAddres } = newPerson;
        content += `
            <tr>
                <td>${idql}</td>
                <td>${txtTen}</td>
                <td>${txtEmail}</td>
                <td>${txtAddres}</td>
                <td>
                    <button onclick=" deletePerson('${idql}')" data-id="${idql}" class="btn btn-danger" id="btnXoa">Xoa</button>
                    <button onclick = "getDetailPerson('${idql}')" class="btn btn-warning">Sua</button>               
                </td>
            </tr>
        `;
    });
    // console.log(arrP);
    document.getElementById("tbodyQuanLy").innerHTML = content;
    // console.log(content);
};

renderPerson();
function saveDataLocal() {
    let stringData = JSON.stringify(dsql.listPerson);
    localStorage.setItem("arrP", stringData);
}

function getDataLocal() {
    let stringData = localStorage.getItem("arrP");
    if (stringData) {   
        dsql.listPerson = JSON.parse(stringData);
        renderPerson();
    }
}
getDataLocal();

function deletePerson (qlid) {
    // console.log("123");
    let index = dsql.listPerson.findIndex((person, index) => {
        return person.idql == qlid ;
    });
    // console.log(index)
    if (index != -1) {
        dsql.deletePerson(index);
        saveDataLocal();
        renderPerson();
    }
}
deletePerson();

let getDetailPerson =(qlid) => {    
    let person = dsql.listPerson.find((item, index) => {
        return item.idql == qlid;
    });
    // console.log(person);
    if (person) {        
        let arrQL = document.querySelectorAll("form input, form select, form textarea");
        arrQL.forEach((item, index)=>{
            let {id} = item;
            item.value = person[id];

        });
        document.getElementById("idql").readOnly = true;
    }

};

// Cap nhat Person

// let updateFood = () => {
//     let arrQL = document.querySelectorAll("form input, form select, form textarea");
//     let person = new Person ();
//     arrQL.forEach((item, index)=>{
//         let {id, value} = item;
//         person[id] = value;

//     });
//     let index = dsql.listPerson.findIndex((item, index) => {
//         return index.idql == person.idql;
//     });
//     if (index!= -1) {
//         dsql.updatePerson(person, index);
//         document.getElementById("formQL").reset();
//         saveDataLocal();
//         document.getElementById("idql").readOnly = false;
        
//     }

    
// };

document.getElementById("btnUpdate").onclick= function() {
    // console.log("123")
    let arrQL = document.querySelectorAll("form input, form select, form textarea");
    let person = new Person ();
    arrQL.forEach((item, index)=>{
        let {id, value} = item;
        person[id] = value;

    });
    let index = dsql.listPerson.findIndex((item, index) => {
        return index.idql == person.idql;
    });
    if (index!= -1) {
        dsql.updatePerson(person, index);
        document.getElementById("formQL").reset();
        saveDataLocal();
        document.getElementById("idql").readOnly = false;
        
    }

}







window.onload = () => {
    window.deletePerson = (idql) => {
        console.log(idql);
        deletePerson(idql);
    }

    window.getDetailPerson = (idql) => {
        // console.log(idql);
        getDetailPerson(idql);
    }
    
};




  
  